import { Module } from '@nestjs/common';
import { ChatRoomService } from './chat_room.service';
import { ChatRoomController } from './chat_room.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatRoomEntity } from './entities/chat_room.entity';
import { UserService } from '../user/user.service';
import { UserEntity } from '../user/entities/user.entity';
import { RoomMemberEntity } from './entities/room_member.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, ChatRoomEntity, RoomMemberEntity])],
  controllers: [ChatRoomController],
  providers: [ChatRoomService, UserService],
})
export class ChatRoomModule { }
