import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { UserEntity } from "../../user/entities/user.entity";
import { ChatRoomEntity } from "./chat_room.entity";

@Entity('RoomMember')
export class RoomMemberEntity {
    @PrimaryColumn({
        name: "room_id",
        type: 'int'
    })
    room_id: number

    @ManyToOne(() => ChatRoomEntity, (chatRoom) => chatRoom.room_id)
    @JoinColumn({ name: "room_id" })
    chat_room: ChatRoomEntity

    @PrimaryColumn({
        name: "user_id",
        type: 'int'
    })
    user_id: number;

    @ManyToOne(() => UserEntity, (user) => user.user_id)
    @JoinColumn({ name: "user_id" })
    user: UserEntity
}