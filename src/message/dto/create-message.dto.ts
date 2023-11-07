import { ChatRoomEntity } from "../../chat_room/entities/chat_room.entity";
import { UserEntity } from "../../user/entities/user.entity";

export class CreateMessageDto {
    room: ChatRoomEntity;
    user: UserEntity;
    content: string
}
