import { ApiProperty } from "@nestjs/swagger";
import { GetDetailUserResponse } from "../../user/response/get-detail.response";
import { PaginationResponse } from "../../utils/response/pagination.response";
import { BaseResponse } from "../../utils/response/base.response";

export class GetListMember extends PaginationResponse {
    @ApiProperty({
        type: GetDetailUserResponse,
        isArray: true
    })
    list: GetDetailUserResponse[]
}

export class SwaggerGetListMemberResponsePagination extends BaseResponse {
    @ApiProperty({
        type: GetListMember
    })
    data: GetListMember
}