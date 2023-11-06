import { ApiProperty } from "@nestjs/swagger";
import { BaseResponse } from "../../utils/response/base.response";

export class SignInResponse {
    @ApiProperty({
        type: Number,
        example: 1
    })
    user_id: number

    constructor(data?: SignInResponse) {
        this.user_id = data?.user_id;
    }
}

export class SwaggerSignInResponse extends BaseResponse {
    @ApiProperty({
        type: SignInResponse
    })
    data: SignInResponse
}