import { ApiProperty } from "@nestjs/swagger";
import { BaseResponse } from "../../utils/response/base.response";

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
        this.user_id = data?.user_id;
        this.username = data?.username;
        this.email = data?.email;
        this.avatar = data?.avatar;
    }
}

export class SwaggerGetDetailUserResponse extends BaseResponse {
    @ApiProperty({
        type: GetDetailUserResponse
    })
    data: GetDetailUserResponse
}