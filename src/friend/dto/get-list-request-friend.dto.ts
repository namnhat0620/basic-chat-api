import { ApiProperty } from "@nestjs/swagger";
import { IsEnum } from "class-validator";
import { ListRequestFriendEnum } from "src/utils/enums/friend.enum";

export class GetListRequestFriendDto {
    @ApiProperty({
        type: ListRequestFriendEnum,
        default: -1,
        description: `
        0: Ds bạn bè,
        1: Ds lời mời bạn đã nhận,
        2: Ds lời mời kết bạn đã gửi
        `
    })
    type: ListRequestFriendEnum

    @ApiProperty({
        type: Number,
        default: 1
    })
    page: number

    @ApiProperty({
        type: Number,
        default: 20
    })
    limit: number
}