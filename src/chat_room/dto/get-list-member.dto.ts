import { ApiProperty } from "@nestjs/swagger";
import { PaginationDto } from "../../utils/dto/pagination.dto";

export class GetListMemberDto extends PaginationDto {
    @ApiProperty({
        type: Number,
        default: 1,
        required: true
    })
    room_id: number
}