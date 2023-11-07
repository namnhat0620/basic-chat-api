import { WebSocketGateway, SubscribeMessage, MessageBody, ConnectedSocket, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import { GatewayService } from './gateway.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Socket, Server } from 'socket.io';
import { GatewayEnum } from '../utils/enums/gateway.enum';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class GatewayGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly gatewayService: GatewayService) { }
  @WebSocketServer()
  server: Server;

  async handleConnection(client: Socket, ...args: any[]) {
    await this.gatewayService.handleConnection(client);
  }

  async handleDisconnect(client: Socket) {
    await this.gatewayService.handleDisconnect(client);
  }


  @SubscribeMessage(GatewayEnum.message_text)
  async handleMessageText(@MessageBody() createMessageDto: CreateMessageDto, @ConnectedSocket() client: Socket) {
    return await this.gatewayService.handleMessageText(createMessageDto, client);
  }
}
