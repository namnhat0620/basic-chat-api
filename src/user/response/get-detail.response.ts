import { ApiProperty } from "@nestjs/swagger";
import { BaseResponse } from "../../utils/response/base.response";
import { UserEntity } from "../entities/user.entity";

export class GetDetailUserResponse {
    @ApiProperty({
        type: Number,
        example: 1
    })
    user_id: number

    @ApiProperty({
        type: String,
        example: 'namnhat'
    })
    username: string

    @ApiProperty({
        type: String,
        example: 'namnhat@gmail.com'
    })
    email: string

    @ApiProperty({
        type: String,
        example: 'namnhat.png'
    })
    avatar: string

    constructor(data?: GetDetailUserResponse) {
        this.user_id = data?.user_id || 0;
        this.username = data?.username || '';
        this.email = data?.email || '';
        this.avatar = data?.avatar || '';
    }

    static mapToList(data?: GetDetailUserResponse[]) {
        return data?.map(item => new GetDetailUserResponse(item)) || []
    }
}

export class SwaggerGetDetailUserResponse extends BaseResponse {
    @ApiProperty({
        type: GetDetailUserResponse
    })
    data: GetDetailUserResponse
}