import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RoomMemberEntity } from "./room_member.entity";

@Entity('ChatRoom')
export class ChatRoomEntity {
    @PrimaryGeneratedColumn({
        type: 'int'
    })
    room_id: number;

    @Column({
        type: 'varchar'
    })
    room_name: string

    @Column({
        type: 'varchar'
    })
    avatar: string

    @Column({
        type: 'datetime'
    })
    date_created: Date

    @OneToMany(() => RoomMemberEntity, (roomMember) => roomMember.chat_room)
    room_member: RoomMemberEntity[]
}
