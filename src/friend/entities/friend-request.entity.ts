import { UserEntity } from "../../user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity("FriendRequest")
export class FriendRequestEntity {
    @PrimaryColumn({
        name: "user_id_sender",
        type: 'int'
    })
    user_id_sender: number

    @ManyToOne(() => UserEntity, (user) => user.user_id)
    @JoinColumn({ name: "user_id_sender" })
    user_sender: UserEntity

    @PrimaryColumn({
        name: "user_id_recipient",
        type: 'int'
    })
    user_id_recipient: number;

    @ManyToOne(() => UserEntity, (user) => user.user_id)
    @JoinColumn({ name: "user_id_recipient" })
    user_recipient: UserEntity
}
