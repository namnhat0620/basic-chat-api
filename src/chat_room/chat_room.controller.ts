import { Body, Controller, Param, Post, Res, HttpStatus, Get, Query } from '@nestjs/common';
import { ChatRoomService } from './chat_room.service';
import { CreateChatRoomDto } from './dto/create-chat_room.dto';
import { BaseResponse } from '../utils/response/base.response';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaginationDto } from '../utils/dto/pagination.dto';
import { SwaggerGetListChatRoomResponsePagination } from './response/get-list-chat_room.response';
import { AddMemberDto } from './dto/add_member.dto';
import { LeaveChatRoomDto } from './dto/leave-chat_room.dto';
import { SwaggerGetListMemberResponsePagination } from './response/get-list-member.response';
import { GetListMemberDto } from './dto/get-list-member.dto';
import { UpdateChatRoomDto } from './dto/update-chat_room.dto';

@Controller('chat-room')
@ApiTags('ChatRoom')
export class ChatRoomController {
  constructor(private readonly chatRoomService: ChatRoomService) { }

  @Post(':user_id/create')
  @ApiOperation({ summary: 'Tạo nhóm chat' })
  @ApiResponse({
    type: BaseResponse,
    status: HttpStatus.OK
  })
  async createChatRoom(
    @Param('user_id') user_id: string,
    @Body() createChatRoomDto: CreateChatRoomDto,
    @Res() res: any) {
    const data = await this.chatRoomService.createChatRoom(+user_id, createChatRoomDto);
    return res.status(HttpStatus.OK).send(new BaseResponse({ data }))
  }

  @Get(':user_id/list')
  @ApiOperation({ summary: 'Lấy danh sách chat room', })
  @ApiResponse({
    type: SwaggerGetListChatRoomResponsePagination,
    status: HttpStatus.OK
  })
  async getListChatRoom(
    @Param('user_id') user_id: string,
    @Query() getDetailDto: PaginationDto,
    @Res() res: any) {
    const data = await this.chatRoomService.getListChatRoom(+user_id, getDetailDto);
    return res.status(HttpStatus.OK).send(new BaseResponse({ data }))
  }

  @Post(':user_id/add_member')
  @ApiOperation({ summary: 'Thêm thành viên vào nhóm chat' })
  @ApiResponse({
    type: BaseResponse,
    status: HttpStatus.OK
  })
  async addMemberChatRoom(
    @Param('user_id') user_id: string,
    @Body() addMemberDto: AddMemberDto,
    @Res() res: any) {
    const data = await this.chatRoomService.addMemberChatRoom(+user_id, addMemberDto);
    return res.status(HttpStatus.OK).send(new BaseResponse({ data }))
  }

  @Post(':user_id/leave_room')
  @ApiOperation({ summary: 'Rời nhóm chat' })
  @ApiResponse({
    type: BaseResponse,
    status: HttpStatus.OK
  })
  async leaveChatRoom(
    @Param('user_id') user_id: string,
    @Body() leaveChatRoomDto: LeaveChatRoomDto,
    @Res() res: any) {
    const data = await this.chatRoomService.leaveChatRoom(+user_id, leaveChatRoomDto.room_id);
    return res.status(HttpStatus.OK).send(new BaseResponse({ data }))
  }

  @Get(':user_id/list-member')
  @ApiOperation({ summary: 'Lấy danh sách thành viên trong chat room', })
  @ApiResponse({
    type: SwaggerGetListMemberResponsePagination,
    status: HttpStatus.OK
  })
  async getListMember(
    @Param('user_id') user_id: string,
    @Query() getListMemberDto: GetListMemberDto,
    @Res() res: any) {
    const data = await this.chatRoomService.getListMember(+user_id, getListMemberDto);
    return res.status(HttpStatus.OK).send(new BaseResponse({ data }))
  }

  @Post(':user_id/update')
  @ApiOperation({ summary: 'Cập nhật thông tin nhóm chat', })
  @ApiResponse({
    type: BaseResponse,
    status: HttpStatus.OK
  })
  async update(@Param('user_id') user_id: string, @Body() updateChatRoomDto: UpdateChatRoomDto, @Res() res: any) {
    const data = await this.chatRoomService.update(+user_id, updateChatRoomDto);
    return res.status(HttpStatus.OK).send(new BaseResponse({ data }))
  }
}
