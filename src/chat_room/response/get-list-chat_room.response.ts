import { ApiProperty } from "@nestjs/swagger";
import { BaseResponse } from "../../utils/response/base.response";
import { PaginationResponse } from "../../utils/response/pagination.response";
import { MessageResponse } from "../../message/response/message.response";

export class GetChatRoomDetailResponse {
    @ApiProperty({
        type: Number
    })
    room_id: number;

    @ApiProperty({
        type: String
    })
    room_name: string;

    @ApiProperty({
        type: String
    })
    avatar: string;

    @ApiProperty({
        type: MessageResponse
    })
    last_message: MessageResponse

    constructor(data?: any) {
        this.room_id = data?.room_id || 0;
        this.room_name = data?.room_name || '';
        this.avatar = data?.avatar || '';
        this.last_message = new MessageResponse(data?.last_message)
    }

    static mapToList(data?: GetChatRoomDetailResponse[]) {
        return data?.map(item => new GetChatRoomDetailResponse(item)) || []
    }
}

export class GetListChatRoomResponsePagination extends PaginationResponse {
    @ApiProperty({
        type: GetChatRoomDetailResponse,
        isArray: true
    })
    list: GetChatRoomDetailResponse[]
}

export class SwaggerGetListChatRoomResponsePagination extends BaseResponse {
    @ApiProperty({
        type: GetListChatRoomResponsePagination
    })
    data: GetListChatRoomResponsePagination
}