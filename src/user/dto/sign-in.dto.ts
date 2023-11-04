import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
    @ApiProperty({
        type: String,
        example: 'namnhat@gmail.com',
    })
    email: string;

    @ApiProperty({
        type: String,
        example: 'namnhat',
    })
    username: string;

    @ApiProperty({
        type: String,
        example: '123456',
    })
    @IsNotEmpty()
    @IsString()
    password: string;
}
