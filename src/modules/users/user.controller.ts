import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { CreateUserUseCase } from './useCases/create-user.usecase';
import { CreateUserValidationPipe } from './pipe/create-user.validation.pipe';
import { CreateUserDTO } from './dto/user.dto';

@Controller('/users')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  @UsePipes(new CreateUserValidationPipe())
  async create(@Body() data: CreateUserDTO) {
    const user = await this.createUserUseCase.execute(data);
    return user;
  }
}
