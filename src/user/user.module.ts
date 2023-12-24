import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserEntity } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FriendEntity } from '../friend/entities/friend.entity';
import { FriendRequestEntity } from '../friend/entities/friend-request.entity';
import { BlockEntity } from './entities/block.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, FriendEntity, FriendRequestEntity, BlockEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }
