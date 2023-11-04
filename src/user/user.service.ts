import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { SignInDto } from './dto/sign-in.dto';
import { UserEntity } from './entities/user.entity';
import { SignInResponse } from './response/sign-in.response';
import { UserStatus } from 'src/utils/enums/user.enum';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) { }

  async create(createUserDto: CreateUserDto) {
    const { avatar, username, email, password } = createUserDto
    //Kiểm tra username/email đã được dùng để đk trước đó chưa
    const user = await this.userRepository.findOneBy([{ username }, { email }]);
    if (user) throw new HttpException('Username/Email đã tồn tại', HttpStatus.BAD_REQUEST)

    //Save to db
    const newUser = this.userRepository.create({ avatar, username, email, password, status: UserStatus.ACTIVE })
    await this.userRepository.save(newUser)
  }

  async signIn(signInDto: SignInDto) {
    const { username, email, password } = signInDto

    //Validate
    if (!email && !username) throw new HttpException('Cần nhập email hoặc username', HttpStatus.BAD_REQUEST)

    //Tìm tài khoản
    const user = await this.userRepository.findOneBy([{ username }, { email }]);
    if (!user) throw new HttpException('User không tồn tại', HttpStatus.NOT_FOUND)

    //Check password
    if (password === user.password && +user.status === UserStatus.ACTIVE) {
      return new SignInResponse({ user_id: user.user_id })
    }
    else if (+user.status === UserStatus.BLOCK) {
      throw new HttpException('Tài khoản đã bị khóa!', HttpStatus.FORBIDDEN)
    }
    else {
      throw new HttpException('Sai tên đăng nhập hoặc mật khẩu', HttpStatus.BAD_REQUEST)
    }

  }
}
