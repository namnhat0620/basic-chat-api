import { Body, Controller, Get, HttpStatus, Param, Post, Query, Res } from '@nestjs/common';
import { RequestFriendDto } from './dto/request-friend.dto';
import { FriendService } from './friend.service';
import { BaseResponse } from '../utils/response/base.response';
import { ApiTags } from '@nestjs/swagger';
import { GetListRequestFriendDto } from './dto/get-list-request-friend.dto';

@Controller('friend')
@ApiTags('Friend')
export class FriendController {
  constructor(private readonly friendService: FriendService) { }

  @Post(':user_id/request')
  async requestFriend(
    @Param('user_id') user_id_sender: string,
    @Body() createFriendDto: RequestFriendDto,
    @Res() res: any) {
    const data = await this.friendService.requestFriend(user_id_sender, createFriendDto);
    return res.status(HttpStatus.OK).send(new BaseResponse({ data }))
  }

  @Get(':user_id/list')
  async getListRequestFriend(
    @Param('user_id') user_id: string,
    @Query() getListRequestFriend: GetListRequestFriendDto,
    @Res() res: any) {
    const data = await this.friendService.getListRequestFriend(user_id, getListRequestFriend);
    return res.status(HttpStatus.OK).send(new BaseResponse({ data }))
  }
}
