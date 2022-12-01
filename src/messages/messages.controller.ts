import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessageService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messageService: MessageService) {}
  @Get()
  listMessages() {
    return this.messageService.findAll();
  }

  @Post()
  createMessage(@Body() createMesssage: CreateMessageDto) {
    return this.messageService.create(createMesssage.content);
  }

  @Post('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messageService.findOne(id);

    if (!message) {
      throw new NotFoundException('message not found!');
    }
  }
}
