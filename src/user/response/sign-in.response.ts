import { ApiProperty } from "@nestjs/swagger";
import { BaseResponse } from "../../utils/response/base.response";
import { GetDetailUserResponse } from "./get-detail.response";

export class SignInResponse extends GetDetailUserResponse {
    @ApiProperty({
        type: String,
        example: '1234'
    })
    password: string

    constructor(data?: SignInResponse) {
        super(data)
        this.password = data?.password;
    }
}

export class SwaggerSignInResponse extends BaseResponse {
    @ApiProperty({
        type: SignInResponse
    })
    data: SignInResponse
}