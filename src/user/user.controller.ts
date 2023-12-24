import { Body, Controller, Get, HttpStatus, Param, Post, Query, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BaseResponse } from '../utils/response/base.response';
import { CreateUserDto } from './dto/create-user.dto';
import { SignInDto } from './dto/sign-in.dto';
import { SwaggerSignInResponse } from './response/sign-in.response';
import { UserService } from './user.service';
import { GetDetailUserDto } from './dto/get-detail.dto';
import { SwaggerGetDetailUserResponse } from './response/get-detail.response';
import { BlockUserDto } from './dto/block-user.dto';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('create')
  @ApiOperation({ summary: 'Tạo tài khoản (Đăng ký)', })
  @ApiResponse({
    type: BaseResponse,
    status: HttpStatus.OK
  })
  async create(@Body() createUserDto: CreateUserDto, @Res() res: any) {
    const data = await this.userService.create(createUserDto);
    return res.status(HttpStatus.OK).send(new BaseResponse({ data }))
  }

  @Post(':user_id/update')
  @ApiOperation({ summary: 'Cập nhật thông tin user', })
  @ApiResponse({
    type: BaseResponse,
    status: HttpStatus.OK
  })
  async update(@Param('user_id') user_id: string, @Body() createUserDto: CreateUserDto, @Res() res: any) {
    const data = await this.userService.update(+user_id, createUserDto);
    return res.status(HttpStatus.OK).send(new BaseResponse({ data }))
  }

  @Post('sign-in')
  @ApiOperation({ summary: 'Đăng nhập', })
  @ApiResponse({
    type: SwaggerGetDetailUserResponse,
    status: HttpStatus.OK
  })
  async signIn(@Body() signInDto: SignInDto, @Res() res: any) {
    const data = await this.userService.signIn(signInDto);
    return res.status(HttpStatus.OK).send(new BaseResponse({ data }))
  }

  @Get(':user_id/detail')
  @ApiOperation({ summary: 'Tìm user bằng username/email', })
  @ApiResponse({
    type: SwaggerGetDetailUserResponse,
    status: HttpStatus.OK
  })
  async getDetail(@Param('user_id') user_id: string, @Query() getDetailDto: GetDetailUserDto, @Res() res: any) {
    const data = await this.userService.getDetailUser(+user_id, getDetailDto);
    return res.status(HttpStatus.OK).send(new BaseResponse({ data }))
  }

  @Post(':user_id/block')
  @ApiOperation({ summary: 'Block user', })
  @ApiResponse({
    type: BaseResponse,
    status: HttpStatus.OK
  })
  async blockUser(@Param('user_id') user_id: string, @Body() blockUserDto: BlockUserDto, @Res() res: any) {
    const data = await this.userService.blockUser(+user_id, blockUserDto);
    return res.status(HttpStatus.OK).send(new BaseResponse({ data }))
  }
}
