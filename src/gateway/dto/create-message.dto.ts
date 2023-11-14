import { ApiProperty } from "@nestjs/swagger";

export class CreateMessageDto {
    @ApiProperty({
        type: Number,
        example: 1
    })
    room_id: number;

    @ApiProperty({
        type: String,
        example: 'This is first message'
    })
    content: string;
}
