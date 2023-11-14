import { Body, Controller, Get, HttpStatus, Param, Post, Query, Res } from '@nestjs/common';
import { MessageService } from './message.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetDetailUserDto } from '../user/dto/get-detail.dto';
import { SwaggerGetDetailUserResponse } from '../user/response/get-detail.response';
import { BaseResponse } from '../utils/response/base.response';
import { GetListMessageDto } from './dto/get-list-message.dto';
import { SwaggerMessageResponsePagination } from './response/message.response';
import { CreateMessageDto } from '../gateway/dto/create-message.dto';
import { SwaggerMessageDetailResponse } from '../gateway/response/message-detail.response';

@Controller('message')
@ApiTags('Message')
export class MessageController {
  constructor(private readonly messageService: MessageService) { }

  @Get(':user_id/list')
  @ApiOperation({ summary: 'Lấy danh sách tin nhắn', })
  @ApiResponse({
    type: SwaggerMessageResponsePagination,
    status: HttpStatus.OK
  })
  async getListMessage(
    @Param('user_id') user_id: string,
    @Query() getListMessageDto: GetListMessageDto,
    @Res() res: any
  ) {
    const data = await this.messageService.getListMessage(+user_id, getListMessageDto);
    return res.status(HttpStatus.OK).send(new BaseResponse({ data }))
  }


  @Post(':user_id/create')
  @ApiOperation({ summary: 'Nhắn tin', })
  @ApiResponse({
    type: SwaggerMessageDetailResponse,
    status: HttpStatus.OK
  })
  async createMessage(
    @Param('user_id') user_id: string,
    @Body() createMessageDto: CreateMessageDto,
    @Res() res: any
  ) {
    const data = await this.messageService.createMessageByApi(+user_id, createMessageDto);
    return res.status(HttpStatus.OK).send(new BaseResponse({ data }))
  }
}
