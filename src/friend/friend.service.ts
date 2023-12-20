import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../user/entities/user.entity';
import { GetDetailUserResponse } from '../user/response/get-detail.response';
import { UserService } from '../user/user.service';
import { ListRequestFriendEnum } from '../utils/enums/friend.enum';
import { GetListRequestFriendDto } from './dto/get-list-request-friend.dto';
import { AcceptFriendDto } from './dto/accept-friend.dto';
import { FriendRequestEntity } from './entities/friend-request.entity';
import { FriendEntity } from './entities/friend.entity';
import { GetListRequestFriendResponse } from './response/get-list-request-friend.response';
import { RequestFriendDto } from './dto/request-friend.dto';

@Injectable()
export class FriendService {
  constructor(
    @InjectRepository(FriendEntity)
    private friendRepository: Repository<FriendEntity>,

    @InjectRepository(FriendRequestEntity)
    private friendRequestRepository: Repository<FriendRequestEntity>,

    private readonly userService: UserService,
  ) { }

  async requestFriend(user_id_sender: string, requestFriendDto: RequestFriendDto) {
    const { user_id } = requestFriendDto

    //Kiểm tra tài khoản hợp lệ
    await this.userService.checkUsers([user_id, +user_id_sender]);

    //Kiểm tra nếu user_receive đã gửi lời mời kết bạn trước đó
    const request = await this.friendRequestRepository.findOneBy({
      user_id_recipient: +user_id_sender,
      user_id_sender: +user_id
    }
    );

    if (!request) {
      //Kiểm tra 2 user đã là bạn bè
      const friend = await this.friendRepository.findOneBy([
        { user_id1: +user_id, user_id2: +user_id_sender },
        { user_id1: +user_id_sender, user_id2: +user_id }
      ])
      console.log({ user_id, user_id_sender, friend });

      if (!friend) {
        //Tạo lời mời kết bạn
        const newRequest = this.friendRequestRepository.create({
          user_id_recipient: user_id,
          user_id_sender: +user_id_sender
        })
        await this.friendRequestRepository.save(newRequest);
      }
      else throw new HttpException('Đã là bạn bè', HttpStatus.BAD_REQUEST)
    } else {
      //Lời mời kết bạn 2 chiều => trở thành bạn bè
      await this.friendRequestRepository.delete(request);
      const newFriend = this.friendRepository.create({
        user_id1: +user_id_sender,
        user_id2: +user_id
      })
      await this.friendRepository.save(newFriend)
    }
  }

  async acceptFriend(user_id_accept: string, acceptFriendDto: AcceptFriendDto) {
    const { user_id_sender } = acceptFriendDto

    //Kiểm tra tài khoản hợp lệ
    await this.userService.checkUsers([user_id_sender, +user_id_accept]);

    //Kiểm tra nếu user_sender đã gửi lời mời kết bạn trước đó
    const request = await this.friendRequestRepository.findOneBy({
      user_id_recipient: +user_id_accept,
      user_id_sender: +user_id_sender
    }
    );

    if (request) {
      //Tạo bạn bè
      const newFriend = this.friendRepository.create({
        user_id1: +user_id_accept,
        user_id2: +user_id_sender
      })
      await this.friendRepository.save(newFriend)

      //Xóa lời mời kết bạn
      this.friendRequestRepository.delete({
        user_id_sender: +user_id_sender,
        user_id_recipient: +user_id_accept
      })
    }
    else throw new HttpException('User chưa gửi lời mời kết bạn', HttpStatus.NOT_FOUND)
  }

  async getListRequestFriend(user_id: string, getListRequestFriendDto: GetListRequestFriendDto) {
    //Check user hợp lệ
    const user = await this.userService.checkUsers([+user_id]);

    //Lấy điều kiện client
    const page = +getListRequestFriendDto.page || 1;
    const limit = +getListRequestFriendDto.limit || 20;
    const skip = (page - 1) * limit;
    let list: GetDetailUserResponse[];
    let listFriendRequest: FriendRequestEntity[];
    let total_record: number;

    //Lấy danh sách
    switch (+getListRequestFriendDto.type) {
      case ListRequestFriendEnum.RECEIVED: //Lấy ds người đã gửi lời mời kết bạn cho user
        [listFriendRequest, total_record] = await this.friendRequestRepository.findAndCount({
          where: { user_id_recipient: +user_id },
          relations: { user_sender: true },
          take: limit,
          skip
        })
        list = listFriendRequest.map(request => new GetDetailUserResponse(request.user_sender));
        break;
      case ListRequestFriendEnum.SENT: //Lấy ds người đã nhận lời mời kết bạn từ user
        [listFriendRequest, total_record] = await this.friendRequestRepository.findAndCount({
          where: { user_id_sender: +user_id },
          relations: { user_recipient: true },
          take: limit,
          skip
        });
        list = listFriendRequest.map(request => new GetDetailUserResponse(request.user_recipient));
        break;
      default:
        let listFriend: FriendEntity[];
        [listFriend, total_record] = await this.friendRepository.findAndCount({
          where: [
            { user_id1: +user_id },
            { user_id2: +user_id }
          ],
          relations: { user1: true, user2: true },
          take: limit,
          skip
        })
        list = listFriend.map(item => new GetDetailUserResponse(item.user_id1 === +user_id ? item.user2 : item.user1))
        break;
    }
    return new GetListRequestFriendResponse({ limit, total_record, list });
  }
}
