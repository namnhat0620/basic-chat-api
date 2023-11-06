import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class CreateChatRoomDto {
    @ApiProperty({
        type: Number,
        isArray: true,
        description: 'Ds các user khác cần thêm vào nhóm',
        example: [1, 2, 3]
    })
    @IsArray()
    @IsNotEmpty()
    user_id: number[]

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
