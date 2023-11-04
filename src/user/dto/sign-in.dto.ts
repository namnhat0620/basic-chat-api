import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
    // @ApiProperty({
    //     type: String,
    //     example: 'namnhat@gmail.com',
    // })
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
}
