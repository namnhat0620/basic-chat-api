import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MessageEntity } from './entities/message.entity';
import { GetListMessageDto } from './dto/get-list-message.dto';
import { UserService } from '../user/user.service';
import { ChatRoomService } from '../chat_room/chat_room.service';
import { MessageResponse } from './response/message.response';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(MessageEntity)
    private readonly messageRepository: Repository<MessageEntity>,

    private readonly userService: UserService,
    private readonly chatRoomService: ChatRoomService
  ) { }

  async getListMessage(user_id: number, getListMessageDto: GetListMessageDto) {
    const { room_id } = getListMessageDto;
    //Kiểm tra user hợp lệ
    await this.userService.checkUsers([user_id]);

    //Kiểm tra user là thành viên cuộc trò chuyện
    await this.chatRoomService.getChatRoom(user_id, room_id)

    //Lấy ds tin nhắn
    const page = +getListMessageDto.page || 1;
    const limit = +getListMessageDto.limit || 20;
    const skip = (page - 1) * limit;

    const [listMessages, total_record] = await this.messageRepository.findAndCount({
      where: {
        room: { room_id },
        user: { user_id }
      },
      relations: { user: true },
      order: { message_id: 'DESC' },
      take: limit,
      skip
    })

    return { limit, total_record, list: MessageResponse.mapToList(listMessages) }
  }

  //==============SUPPORT FUNCTION
  async createMessage(createMessageDto: CreateMessageDto): Promise<MessageEntity> {
    const message = this.messageRepository.create({ ...createMessageDto, timestamp: new Date() });
    await this.messageRepository.save(message);
    return message;
  }
}
