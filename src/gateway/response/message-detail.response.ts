import * as moment from "moment";
import { GetChatRoomDetailResponse } from "../../chat_room/response/get-list-chat_room.response";
import { GetDetailUserResponse } from "../../user/response/get-detail.response";

export class GetChatRoomResponse {
    room_id: number;
    room_name: string;
    avatar: string;

    constructor(data?: any) {
        this.room_id = data?.room_id || 0,
            this.room_name = data?.room_name,
            this.avatar = data?.avatar
    }
}
export class MessageDetailResponse {
    message_id: number;
    room: GetChatRoomResponse;
    user: GetDetailUserResponse;
    content: string;
    timestamp: string;

    constructor(data?: any) {
        this.message_id = data?.message_id || 0;
        this.room = new GetChatRoomResponse(data?.room);
        this.user = new GetDetailUserResponse(data?.user);
        this.content = data?.content || '';
        this.timestamp = moment(data?.timestamp).format('DD/MM/YYYY HH:mm:ss');
    }
}