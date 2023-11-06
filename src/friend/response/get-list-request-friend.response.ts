import { ApiProperty } from "@nestjs/swagger";
import { PaginationResponse } from "../../utils/response/pagination.response";
import { GetDetailUserResponse } from "../../user/response/get-detail.response";
import { BaseResponse } from "../../utils/response/base.response";

export class GetListRequestFriendResponse extends PaginationResponse {
    @ApiProperty({
        type: GetDetailUserResponse,
        isArray: true
    })
    list: GetDetailUserResponse[];

    constructor(data?: any) {
        super(data);
        this.list = data?.list;
    }
}

export class SwaggerGetListRequestFriendResponse extends BaseResponse {
    @ApiProperty({
        type: GetListRequestFriendResponse
    })
    data: GetListRequestFriendResponse
}