import { ApiProperty } from "@nestjs/swagger";
import { PaginationDto } from "../../utils/dto/pagination.dto";
import { ListRequestFriendEnum } from "../../utils/enums/friend.enum";

export class GetListRequestFriendDto extends PaginationDto {
    @ApiProperty({
        type: ListRequestFriendEnum,
        default: -1,
        description: `
        1: Ds lời mời bạn đã nhận,
        2: Ds lời mời kết bạn đã gửi,
        Còn lại: Ds bạn bè
        `
    })
    type: ListRequestFriendEnum
}