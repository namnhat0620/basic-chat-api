import { ApiProperty } from "@nestjs/swagger";

export class DeleteFriendDto {
    @ApiProperty({
        type: Number,
        description: 'Id của user cần xóa kết bạn',
        example: 1
    })
    user_id: number
}
