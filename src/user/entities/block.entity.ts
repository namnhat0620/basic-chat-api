import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity("Block")
export class BlockEntity {
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

    @PrimaryColumn({
        type: 'varchar'
    })
    reason: string;
}
