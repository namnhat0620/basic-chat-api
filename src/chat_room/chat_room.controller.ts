import { Body, Controller, Param, Post, Res, HttpStatus, Get, Query } from '@nestjs/common';
import { ChatRoomService } from './chat_room.service';
import { CreateChatRoomDto } from './dto/create-chat_room.dto';
import { BaseResponse } from '../utils/response/base.response';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaginationDto } from '../utils/dto/pagination.dto';
import { SwaggerGetListChatRoomResponsePagination } from './response/get-list-chat_room.response';

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
}
