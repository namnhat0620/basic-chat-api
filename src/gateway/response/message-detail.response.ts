import * as moment from "moment";
import { GetChatRoomDetailResponse } from "../../chat_room/response/get-list-chat_room.response";
import { GetDetailUserResponse } from "../../user/response/get-detail.response";
import { ApiProperty } from "@nestjs/swagger";
import { BaseResponse } from "../../utils/response/base.response";

export class GetChatRoomResponse {
    @ApiProperty({
        type: Number,
        example: 1
    })
    room_id: number;

    @ApiProperty({
        type: Number,
        example: 'Nhóm chat vippro'
    })
    room_name: string;

    @ApiProperty({
        type: String,
        example: 'default.png'
    })
    avatar: string;

    constructor(data?: any) {
        this.room_id = data?.room_id || 0,
            this.room_name = data?.room_name,
            this.avatar = data?.avatar
    }
}
export class MessageDetailResponse {
    @ApiProperty({
        type: Number,
        example: 1
    })
    message_id: number;

    @ApiProperty({
        type: GetChatRoomResponse
    })
    room: GetChatRoomResponse;

    @ApiProperty({
        type: GetDetailUserResponse
    })
    user: GetDetailUserResponse;

    @ApiProperty({
        type: String,
        example: 'This is a message'
    })
    content: string;

    @ApiProperty({
        type: String,
        example: '14/11/2023 22:00:00'
    })
    timestamp: string;

    constructor(data?: any) {
        this.message_id = data?.message_id || 0;
        this.room = new GetChatRoomResponse(data?.room);
        this.user = new GetDetailUserResponse(data?.user);
        this.content = data?.content || '';
        this.timestamp = moment(data?.timestamp).format('DD/MM/YYYY HH:mm:ss');
    }
}

export class SwaggerMessageDetailResponse extends BaseResponse {
    @ApiProperty({
        type: MessageDetailResponse
    })
    data: MessageDetailResponse
}