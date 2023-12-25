import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { Socket, Server } from 'socket.io';
import { MessageService } from '../message/message.service';
import { MessageDetailResponse } from './response/message-detail.response';
import { ChatRoomService } from '../chat_room/chat_room.service';
import { UserService } from '../user/user.service';
import { GatewayListenEnum, USER_CONNECTION, ttl } from '../utils/enums/gateway.enum';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class GatewayService {
  constructor(
    private readonly userService: UserService,
    private readonly chatRoomService: ChatRoomService,
    private readonly messageService: MessageService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) { }
  async handleConnection(client: Socket) {
    const user_id = +client.handshake.headers.user_id;
    const socket_id = client.id;
    //Lưu thông tin user đang online
    await this.cacheManager.set(`${USER_CONNECTION}:${user_id}`, socket_id, ttl);
  }

  async handleDisconnect(client: Socket) {
    const user_id = +client.handshake.headers.user_id;
    const socket_id = client.id;
    //Xóa thông tin user đang online
    await this.cacheManager.del(`${USER_CONNECTION}:${user_id}`);
  }

  async handleMessageText(createMessageDto: CreateMessageDto, client: Socket) {
    const { content, room_id } = createMessageDto;

    //Kiểm tra user hợp lệ
    const user_id = +client.handshake.headers.user_id;
    const user = (await this.userService.checkUsers([user_id]))[0];

    //Lấy ds member trong phòng
    const room = await this.chatRoomService.getChatRoom(user_id, +room_id);

    //Tạo tin nhắn
    const message = await this.messageService.createMessage({ room, user, content });

    //Gửi tin nhắn cho user trong room
    room.room_member.forEach(async roomMember => {
      const socketId: string = await this.cacheManager.get(`${USER_CONNECTION}:${roomMember.user_id}`);
      socketId && global._server.to(socketId).emit(GatewayListenEnum.message_text, new MessageDetailResponse(message));
    })
  }

  async handleMessageFile(createMessageDto: CreateMessageDto, client: Socket) {
    const { content, room_id } = createMessageDto;

    //Kiểm tra user hợp lệ
    const user_id = +client.handshake.headers.user_id;
    const user = (await this.userService.checkUsers([user_id]))[0];

    //Lấy ds member trong phòng
    const room = await this.chatRoomService.getChatRoom(user_id, +room_id);

    //Tạo tin nhắn
    const message = await this.messageService.createMessage({ room, user, content });

    //Gửi tin nhắn cho user trong room
    room.room_member.forEach(async roomMember => {
      const socketId: string = await this.cacheManager.get(`${USER_CONNECTION}:${roomMember.user_id}`);
      socketId && global._server.to(socketId).emit(GatewayListenEnum.message_file, new MessageDetailResponse(message));
    })
  }
}
