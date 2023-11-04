import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { SignInDto } from './dto/sign-in.dto';
import { UserEntity } from './entities/user.entity';
import { SignInResponse } from './response/sign-in.response';

const keyHash = 10

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) { }

  async create(createUserDto: CreateUserDto) {
    const { avatar, username, password } = createUserDto
    //Kiểm tra username đã được dùng để đk trước đó chưa
    const user = await this.userRepository.findOneBy({ username });
    if (user) throw new HttpException('Username đã tồn tại', HttpStatus.BAD_REQUEST)

    //Save to db
    const newUser = this.userRepository.create({ avatar, username, password })
    await this.userRepository.save(newUser)
  }

  async signIn(signInDto: SignInDto) {
    const { username, password } = signInDto

    // //Validate
    // if (!email && !full_name) throw new HttpException('Cần nhập email hoặc username', HttpStatus.BAD_REQUEST)

    //Tìm tài khoản
    const user = await this.userRepository.findOneBy({ username });
    if (!user) throw new HttpException('User không tồn tại', HttpStatus.NOT_FOUND)

    //Check password
    if (password === user.password) {
      return new SignInResponse({ user_id: user.user_id })
    }
    else {
      throw new HttpException('Sai tên đăng nhập hoặc mật khẩu', HttpStatus.BAD_REQUEST)
    }

  }
}
