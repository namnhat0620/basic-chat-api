import { ApiProperty } from "@nestjs/swagger";
import { PaginationDto } from "../../utils/dto/pagination.dto";

export class GetListMessageDto extends PaginationDto {
    @ApiProperty({
        type: Number,
        example: 1,
        description: 'Id room chat'
    })
    room_id: number
}