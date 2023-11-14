import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { CreateMessageDto as CreateMessageDtoByApi } from '../gateway/dto/create-message.dto'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MessageEntity } from './entities/message.entity';
import { GetListMessageDto } from './dto/get-list-message.dto';
import { UserService } from '../user/user.service';
import { ChatRoomService } from '../chat_room/chat_room.service';
import { MessageResponse } from './response/message.response';
import { ChatRoomEntity } from '../chat_room/entities/chat_room.entity';
import { MessageDetailResponse } from '../gateway/response/message-detail.response';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(MessageEntity)
    private readonly messageRepository: Repository<MessageEntity>,

    @InjectRepository(ChatRoomEntity)
    private readonly chatRoomRepository: Repository<ChatRoomEntity>,

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

  async createMessageByApi(user_id: number, createMessageDto: CreateMessageDtoByApi) {
    const { room_id, content } = createMessageDto;

    //Validate
    const user = (await this.userService.checkUsers([user_id]))[0];
    const room = await this.chatRoomService.getChatRoom(user_id, room_id);

    //Create message
    const message = await this.createMessage({ room, user, content });
    return new MessageDetailResponse(message);
  }

  //==============SUPPORT FUNCTION===================//
  async createMessage(createMessageDto: CreateMessageDto): Promise<MessageEntity> {
    //Tạo tin nhắn mới
    const message = this.messageRepository.create({ ...createMessageDto, timestamp: new Date() });
    await this.messageRepository.save(message);

    //Cập nhật last_message
    await this.chatRoomRepository.save({ ...createMessageDto.room, last_message: message });
    return message;
  }
}
