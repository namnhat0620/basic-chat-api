import { ApiProperty } from "@nestjs/swagger";

export class LeaveChatRoomDto {
    @ApiProperty({
        type: Number,
        description: 'Id của nhóm chat',
        example: 1
    })
    room_id: number
}
