import { ApiProperty } from "@nestjs/swagger";

export class AcceptFriendDto {
    @ApiProperty({
        type: Number,
        description: 'Id của user đã gửi lời mời kết bạn',
        example: 1
    })
    user_id_sender: number

    @ApiProperty({
        type: Number,
        description: `
        0: Deny
        1: Accept`,
        example: 1
    })
    type: number
}
