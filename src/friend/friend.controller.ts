import { Body, Controller, Get, HttpStatus, Param, Post, Query, Res } from '@nestjs/common';
import { AcceptFriendDto } from './dto/accept-friend.dto';
import { FriendService } from './friend.service';
import { BaseResponse } from '../utils/response/base.response';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetListRequestFriendDto } from './dto/get-list-request-friend.dto';
import { SwaggerGetListRequestFriendResponse } from './response/get-list-request-friend.response';
import { RequestFriendDto } from './dto/request-friend.dto';
import { DeleteFriendDto } from './dto/delete-friend.dto';

@Controller('friend')
@ApiTags('Friend')
export class FriendController {
  constructor(private readonly friendService: FriendService) { }

  @Post(':user_id/request')
  @ApiOperation({ summary: 'Gửi lời mời kết bạn' })
  @ApiResponse({
    type: BaseResponse,
    status: HttpStatus.OK
  })
  async requestFriend(
    @Param('user_id') user_id_sender: string,
    @Body() createFriendDto: RequestFriendDto,
    @Res() res: any) {
    const data = await this.friendService.requestFriend(user_id_sender, createFriendDto);
    return res.status(HttpStatus.OK).send(new BaseResponse({ data }))
  }

  @Post(':user_id/accept')
  @ApiOperation({ summary: 'Chấp nhận lời mời kết bạn' })
  @ApiResponse({
    type: BaseResponse,
    status: HttpStatus.OK
  })
  async acceptFriend(
    @Param('user_id') user_id_accept: string,
    @Body() createFriendDto: AcceptFriendDto,
    @Res() res: any) {
    const data = await this.friendService.acceptFriend(user_id_accept, createFriendDto);
    return res.status(HttpStatus.OK).send(new BaseResponse({ data }))
  }

  @Get(':user_id/list')
  @ApiOperation({ summary: 'Lấy ds bạn bè/lời mời kết bạn' })
  @ApiResponse({
    type: SwaggerGetListRequestFriendResponse,
    status: HttpStatus.OK
  })
  async getListRequestFriend(
    @Param('user_id') user_id: string,
    @Query() getListRequestFriend: GetListRequestFriendDto,
    @Res() res: any) {
    const data = await this.friendService.getListRequestFriend(user_id, getListRequestFriend);
    return res.status(HttpStatus.OK).send(new BaseResponse({ data }))
  }

  @Post(':user_id/delete')
  @ApiOperation({ summary: 'Xóa kết bạn' })
  @ApiResponse({
    type: BaseResponse,
    status: HttpStatus.OK
  })
  async deleteFriend(
    @Param('user_id') user_id_delete: string,
    @Body() deleteFriendDto: DeleteFriendDto,
    @Res() res: any) {
    const data = await this.friendService.deleteFriend(+user_id_delete, deleteFriendDto.user_id);
    return res.status(HttpStatus.OK).send(new BaseResponse({ data }))
  }
}
