import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
    // @ApiProperty({
    //     type: String,
    //     example: 'namnhat@gmail.com',
    // })
    // @IsNotEmpty()
    // @IsString()
    // email: string;

    @ApiProperty({
        type: String,
        example: 'namnhat',
    })
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty({
        type: String,
        example: '123456',
    })
    @IsNotEmpty()
    @IsString()
    password: string;

    @ApiProperty({
        type: String,
        example: 'avatar.png',
    })
    @IsString()
    avatar: string;

}
