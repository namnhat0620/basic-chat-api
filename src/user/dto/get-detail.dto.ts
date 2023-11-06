import { ApiProperty } from '@nestjs/swagger';

export class GetDetailUserDto {
    @ApiProperty({
        type: String,
        example: 'namnhat@gmail.com',
        required: false
    })
    email: string;

    @ApiProperty({
        type: String,
        example: 'namnhat',
        required: false
    })
    username: string;
}