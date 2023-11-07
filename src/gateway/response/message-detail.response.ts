import * as moment from "moment";
import { GetChatRoomResponse } from "../../chat_room/response/get-list-chat_room.response";
import { GetDetailUserResponse } from "../../user/response/get-detail.response";

export class MessageDetailResponse {
    message_id: number;
    room: GetChatRoomResponse;
    user: GetDetailUserResponse;
    content: string;
    timestamp: string;

    constructor(data?: any) {
        this.message_id = data?.message_id;
        this.room = new GetChatRoomResponse(data?.room);
        this.user = new GetDetailUserResponse(data?.user);
        this.content = data?.content;
        this.timestamp = moment(data?.timestamp).format('DD/MM/YYYY HH:mm:ss');
    }
}