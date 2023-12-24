import { Module } from '@nestjs/common';
import { FriendService } from './friend.service';
import { FriendController } from './friend.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FriendEntity } from './entities/friend.entity';
import { UserEntity } from '../user/entities/user.entity';
import { FriendRequestEntity } from './entities/friend-request.entity';
import { UserService } from '../user/user.service';
import { BlockEntity } from '../user/entities/block.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, FriendEntity, FriendRequestEntity, BlockEntity])],
  controllers: [FriendController],
  providers: [FriendService, UserService],
})
export class FriendModule { }
