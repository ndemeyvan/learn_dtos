import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/create-user.dto';

@Injectable()
export class UserService {
  async createUser(createUserDto: CreateUserDto): Promise<any> {
    return { user: createUserDto };
  }
}
