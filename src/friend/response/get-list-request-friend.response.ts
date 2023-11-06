import { ApiProperty } from "@nestjs/swagger";
import { PaginationResponse } from "../../utils/response/pagination.response";
import { GetDetailUserResponse } from "../../user/response/get-detail.response";

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
    // static mapToList(data?: any) {
    //     return data?.map(item => new GetDetailUserResponse(item));
    // }
}