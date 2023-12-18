import { Module } from '@nestjs/common';
import { ChatRoomService } from './chat_room.service';
import { ChatRoomController } from './chat_room.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatRoomEntity } from './entities/chat_room.entity';
import { UserService } from '../user/user.service';
import { UserEntity } from '../user/entities/user.entity';
import { RoomMemberEntity } from './entities/room_member.entity';
import { FriendEntity } from '../friend/entities/friend.entity';
import { FriendRequestEntity } from '../friend/entities/friend-request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, FriendEntity, FriendRequestEntity, ChatRoomEntity, RoomMemberEntity])],
  controllers: [ChatRoomController],
  providers: [ChatRoomService, UserService],
})
export class ChatRoomModule { }
