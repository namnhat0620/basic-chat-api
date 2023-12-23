import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { SignInDto } from './dto/sign-in.dto';
import { UserEntity } from './entities/user.entity';
import { SignInResponse } from './response/sign-in.response';
import { UserStatus } from '../utils/enums/user.enum';
import { GetDetailUserDto } from './dto/get-detail.dto';
import { GetDetailUserResponse } from './response/get-detail.response';
import { BlockUserDto } from './dto/block-user.dto';
import { FriendEntity } from '../friend/entities/friend.entity';
import { FriendRequestEntity } from '../friend/entities/friend-request.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,

    @InjectRepository(FriendEntity)
    private friendRepository: Repository<FriendEntity>,

    @InjectRepository(FriendRequestEntity)
    private friendRequestRepository: Repository<FriendRequestEntity>,
  ) { }
  async create(createUserDto: CreateUserDto) {
    const { avatar, username, email, password } = createUserDto
    //Kiểm tra username/email đã được dùng để đk trước đó chưa
    const user = await this.userRepository.findOneBy([{ username }, { email }]);
    if (user) throw new HttpException('Username/Email đã tồn tại', HttpStatus.BAD_REQUEST)

    //Save to db
    const newUser = this.userRepository.create({ avatar, username, email, password, status: UserStatus.ACTIVE })
    await this.userRepository.save(newUser)
  }

  async update(user_id: number, createUserDto: CreateUserDto) {
    const { avatar, username, email, password } = createUserDto
    //Kiểm tra user tồn tại
    await this.checkUsers([user_id])

    //Kiểm tra username/email đã được dùng để đk trước đó chưa
    const user = await this.userRepository.findOneBy([{ username }, { email }]);
    if (user) throw new HttpException('Username/Email đã tồn tại', HttpStatus.BAD_REQUEST)

    //Save to db
    const newUser = this.userRepository.create({ user_id, avatar, username, email, password, status: UserStatus.ACTIVE })
    await this.userRepository.save(newUser)
  }

  async signIn(signInDto: SignInDto) {
    const { username, email, password } = signInDto

    //Validate
    if (!email && !username) throw new HttpException('Cần nhập email hoặc username', HttpStatus.BAD_REQUEST)

    //Tìm tài khoản
    const user = await this.userRepository.findOneBy([
      { username: username ? username : '' },
      { email: email ? email : '' }
    ]);
    if (!user) throw new HttpException('User không tồn tại', HttpStatus.NOT_FOUND)

    //Check password
    if (password === user.password && +user.status === UserStatus.ACTIVE) {
      return new GetDetailUserResponse(user)
    }
    else if (+user.status === UserStatus.BLOCK) {
      throw new HttpException('Tài khoản đã bị khóa!', HttpStatus.FORBIDDEN)
    }
    else {
      throw new HttpException('Sai tên đăng nhập hoặc mật khẩu', HttpStatus.BAD_REQUEST)
    }
  }

  async getDetailUser(getDetailDto: GetDetailUserDto) {
    const { email, username } = getDetailDto;
    const user = await this.userRepository.findOneBy([
      { email: email ? email : '', status: UserStatus.ACTIVE },
      { username: username ? username : '', status: UserStatus.ACTIVE }
    ]);
    if (!user) throw new HttpException('Không tìm thấy user', HttpStatus.NOT_FOUND);
    return new GetDetailUserResponse(user)
  }

  // async blockUser(user_id: number, blockUserDto: BlockUserDto) {
  //   const { user_id_block, report } = blockUserDto

  //   //Kiểm tra user hợp lệ
  //   this.checkUsers([user_id, user_id_block])

  //   //Block


  //   //Xóa bạn
  //   await this.friendRepository.delete({
  //     user_id1: user_id,
  //     user_id2: user_id_block
  //   })
  //   await this.friendRepository.delete({
  //     user_id1: user_id_block,
  //     user_id2: user_id
  //   })

  //   //Xóa lời mời kết bạn
  //   await this.friendRequestRepository.delete({
  //     user_id_recipient: user_id,
  //     user_id_sender: user_id_block
  //   })
  //   await this.friendRequestRepository.delete({
  //     user_id_recipient: user_id_block,
  //     user_id_sender: user_id
  //   })
  // }


  //============SUPPORT FUNCTION=================//
  async checkUsers(user_ids: number[]) {
    if (user_ids.length === 1) {
      const user = await this.userRepository.findOneBy({
        user_id: +user_ids[0],
        status: UserStatus.ACTIVE
      })

      if (user) return [user];
      else throw new HttpException('User không tồn tại hoặc đã bị khóa', HttpStatus.NOT_FOUND)
    } else {
      const listUser = await this.userRepository.findBy({
        user_id: In(user_ids),
        status: UserStatus.ACTIVE
      })
      if (listUser.length === user_ids.length) return listUser
      else throw new HttpException('User không tồn tại hoặc đã bị khóa', HttpStatus.NOT_FOUND)
    }
  }
}
