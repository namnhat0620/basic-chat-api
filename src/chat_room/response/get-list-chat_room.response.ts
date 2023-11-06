import { ApiProperty } from "@nestjs/swagger";
import { BaseResponse } from "../../utils/response/base.response";
import { PaginationResponse } from "../../utils/response/pagination.response";

export class GetListChatRoomResponse {
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

    constructor(data?: GetListChatRoomResponse) {
        this.room_id = data?.room_id;
        this.room_name = data?.room_name;
        this.avatar = data?.avatar;
    }

    static mapToList(data?: GetListChatRoomResponse[]) {
        return data?.map(item => new GetListChatRoomResponse(item)) || []
    }
}

export class GetListChatRoomResponsePagination extends PaginationResponse {
    @ApiProperty({
        type: GetListChatRoomResponse,
        isArray: true
    })
    list: GetListChatRoomResponse[]
}

export class SwaggerGetListChatRoomResponsePagination extends BaseResponse {
    @ApiProperty({
        type: GetListChatRoomResponsePagination
    })
    data: GetListChatRoomResponsePagination
}