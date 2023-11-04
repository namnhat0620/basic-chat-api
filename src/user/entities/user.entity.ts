import { UserStatus } from "src/utils/enums/user.enum";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'User' })
export class UserEntity {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({
        type: String,
    })
    username: string;

    @Column({
        type: String
    })
    email: string;

    @Column({
        type: String
    })
    password: string;

    @Column({
        type: String
    })
    avatar: string;

    @Column({
        type: Number,
        default: UserStatus.ACTIVE
    })
    status: number
}
