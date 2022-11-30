import { readFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: string) {
    const constants = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(constants);
    return messages[id];
  }

  async findAll() {
    const content = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(content);
    return messages;
  }

  async create(message: string) {}
}
