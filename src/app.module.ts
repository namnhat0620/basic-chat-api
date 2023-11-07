import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { ValidationPipe } from './utils/validator/validation.pipe';
import { FriendModule } from './friend/friend.module';
import { FriendEntity } from './friend/entities/friend.entity';
import { FriendRequestEntity } from './friend/entities/friend-request.entity';
import { ChatRoomModule } from './chat_room/chat_room.module';
import { ChatRoomEntity } from './chat_room/entities/chat_room.entity';
import { RoomMemberEntity } from './chat_room/entities/room_member.entity';
import { MessageModule } from './message/message.module';
import { MessageEntity } from './message/entities/message.entity';
import { GatewayModule } from './gateway/gateway.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql12.freemysqlhosting.net',
      port: 3306,
      username: 'sql12659071',
      password: 'lJzIr9B6d1',
      database: 'sql12659071',
      entities: [FriendEntity, UserEntity, FriendRequestEntity, ChatRoomEntity, RoomMemberEntity, MessageEntity],
    }),
    CacheModule.register(),
    UserModule,
    FriendModule,
    ChatRoomModule,
    MessageModule,
    GatewayModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule { }
