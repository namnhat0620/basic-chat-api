import { ApiProperty } from "@nestjs/swagger";

export class RequestFriendDto {
    @ApiProperty({
        type: Number,
        description: 'Id của user cần gửi lời mời kết bạn',
        example: 1
    })
    user_id: number
}
