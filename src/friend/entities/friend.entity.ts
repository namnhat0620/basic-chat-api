import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { UserEntity } from "../../user/entities/user.entity";

@Entity("Friend")
export class FriendEntity {
    @PrimaryColumn({
        name: "user_id1",
        type: 'int'
    })
    user_id1: number

    @ManyToOne(() => UserEntity, (user) => user.user_id)
    @JoinColumn({ name: "user_id1" })
    user1: UserEntity

    @PrimaryColumn({
        name: "user_id2",
        type: 'int'
    })
    user_id2: number;

    @ManyToOne(() => UserEntity, (user) => user.user_id)
    @JoinColumn({ name: "user_id2" })
    user2: UserEntity
}
