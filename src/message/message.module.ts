import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageEntity } from './entities/message.entity';
import { UserService } from '../user/user.service';
import { ChatRoomService } from '../chat_room/chat_room.service';
import { UserEntity } from '../user/entities/user.entity';
import { ChatRoomEntity } from '../chat_room/entities/chat_room.entity';
import { RoomMemberEntity } from '../chat_room/entities/room_member.entity';
import { FriendEntity } from '../friend/entities/friend.entity';
import { FriendRequestEntity } from '../friend/entities/friend-request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MessageEntity, UserEntity, ChatRoomEntity, RoomMemberEntity, FriendEntity, FriendRequestEntity])],
  controllers: [MessageController],
  providers: [MessageService, UserService, ChatRoomService],
})
export class MessageModule { }
