import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";

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
        isArray: true,
        description: 'Lí do block user',
        example: ['Sending me spam messages']
    })
    @IsArray()
    reason: string[]
}
