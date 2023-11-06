import { Module } from '@nestjs/common';
import { FriendService } from './friend.service';
import { FriendController } from './friend.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FriendEntity } from './entities/friend.entity';
import { UserEntity } from '../user/entities/user.entity';
import { FriendRequestEntity } from './entities/friend-request.entity';
import { UserService } from '../user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, FriendEntity, FriendRequestEntity])],
  controllers: [FriendController],
  providers: [FriendService, UserService],
})
export class FriendModule { }
