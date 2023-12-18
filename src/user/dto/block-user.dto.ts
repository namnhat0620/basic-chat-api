import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class BlockUserDto {
    @ApiProperty({
        type: Number,
        description: 'Id của user cần block',
        example: 1
    })
    @IsNotEmpty()
    @IsNumber()
    user_id_block: number

    @ApiProperty({
        type: String,
        description: 'Lí do block user',
        example: 'Sending me spam messages'
    })
    @IsNotEmpty()
    @IsString()
    report: string
}
