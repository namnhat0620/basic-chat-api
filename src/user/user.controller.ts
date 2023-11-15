import { Body, Controller, Get, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BaseResponse } from '../utils/response/base.response';
import { CreateUserDto } from './dto/create-user.dto';
import { SignInDto } from './dto/sign-in.dto';
import { SwaggerSignInResponse } from './response/sign-in.response';
import { UserService } from './user.service';
import { GetDetailUserDto } from './dto/get-detail.dto';
import { SwaggerGetDetailUserResponse } from './response/get-detail.response';

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

  @Post('sign-in')
  @ApiOperation({ summary: 'Đăng nhập', })
  @ApiResponse({
    type: SwaggerSignInResponse,
    status: HttpStatus.OK
  })
  async signIn(@Body() signInDto: SignInDto, @Res() res: any) {
    const data = await this.userService.signIn(signInDto);
    return res.status(HttpStatus.OK).send(new BaseResponse({ data }))
  }

  @Get('/detail')
  @ApiOperation({ summary: 'Tìm user bằng username/email', })
  @ApiResponse({
    type: SwaggerGetDetailUserResponse,
    status: HttpStatus.OK
  })
  async getDetail(@Query() getDetailDto: GetDetailUserDto, @Res() res: any) {
    const data = await this.userService.getDetailUser(getDetailDto);
    return res.status(HttpStatus.OK).send(new BaseResponse({ data }))
  }
}