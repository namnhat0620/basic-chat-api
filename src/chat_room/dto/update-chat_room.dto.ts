import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateChatRoomDto {
    @ApiProperty({
        type: Number,
        default: 1,
        required: true
    })
    @IsNumber()
    @IsNotEmpty()
    room_id: number

    @ApiProperty({
        type: String,
        example: 'Nhóm chat vippro',
        description: 'Tên nhóm chat'
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        type: String,
        example: 'avatarGroup',
        description: 'Ảnh đại diện của nhóm chat'
    })
    avatar: string;
}
