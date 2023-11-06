import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
