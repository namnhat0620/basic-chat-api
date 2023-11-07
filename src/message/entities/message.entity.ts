import { ChatRoomEntity } from "../../chat_room/entities/chat_room.entity";
import { UserEntity } from "../../user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('Message')
export class MessageEntity {
    @PrimaryGeneratedColumn()
    message_id: number;

    @ManyToOne(() => UserEntity, (user) => user.user_id)
    @JoinColumn({ name: 'user_id' })
    user: UserEntity;

    @ManyToOne(() => ChatRoomEntity, (chatRoom) => chatRoom.room_id)
    @JoinColumn({ name: 'room_id' })
    room: ChatRoomEntity;

    @Column({ type: 'varchar' })
    content: string;

    @Column({ type: 'datetime' })
    timestamp: Date;
}
