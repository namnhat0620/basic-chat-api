import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RoomMemberEntity } from "./room_member.entity";
import { MessageEntity } from "../../message/entities/message.entity";

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

    @ManyToOne(() => MessageEntity, (message) => message.message_id)
    @JoinColumn({ name: "last_message_id" })
    last_message: MessageEntity

    @OneToMany(() => RoomMemberEntity, (roomMember) => roomMember.chat_room)
    room_member: RoomMemberEntity[]
}
