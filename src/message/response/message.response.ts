import * as moment from "moment";
import { GetChatRoomResponse } from "../../chat_room/response/get-list-chat_room.response";
import { GetDetailUserResponse } from "../../user/response/get-detail.response";
import { ApiProperty } from "@nestjs/swagger";
import { PaginationResponse } from "../../utils/response/pagination.response";
import { BaseResponse } from "../../utils/response/base.response";

export class MessageResponse {
    @ApiProperty({
        type: Number,
        example: 1,
        description: 'Id tin nhắn'
    })
    message_id: number;

    @ApiProperty({
        type: GetDetailUserResponse
    })
    user: GetDetailUserResponse;

    @ApiProperty({
        type: String,
        example: 'This is message content',
    })
    content: string;

    @ApiProperty({
        type: String,
        example: '22/11/2023 11:03:43',
        description: 'Format chung: DD/MM/YYYY HH:mm:ss'
    })
    timestamp: string;

    constructor(data?: any) {
        this.message_id = data?.message_id;
        this.user = new GetDetailUserResponse(data?.user);
        this.content = data?.content;
        this.timestamp = moment(data?.timestamp).format('DD/MM/YYYY HH:mm:ss');
    }

    static mapToList(data?: any) {
        return data?.map(item => new MessageResponse(item)) || [];
    }
}

export class MessageResponsePagination extends PaginationResponse {
    @ApiProperty({
        type: MessageResponse,
        isArray: true
    })
    list: MessageResponse[]
}

export class SwaggerMessageResponsePagination extends BaseResponse {
    @ApiProperty({
        type: MessageResponsePagination
    })
    data: MessageResponsePagination
}