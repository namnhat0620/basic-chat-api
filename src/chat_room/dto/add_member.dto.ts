import { ApiProperty } from "@nestjs/swagger";

export class AddMemberDto {
    @ApiProperty({
        type: Number,
        isArray: true,
        description: 'Id của các user được thêm vào nhóm chat',
        example: [1, 2, 3]
    })
    user_id_add: number[]

    @ApiProperty({
        type: Number,
        description: 'Id của nhóm chat',
        example: 1
    })
    room_id: number
}
