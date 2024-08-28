import {
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDTO } from '../dto/user.dto';

@Injectable()
export class CreateUserValidationPipe implements PipeTransform {
  transform({ username, email, password, name }: CreateUserDTO) {
    if (!username || !email || !password || !name) {
      throw new HttpException(
        '[username, email, password, name] is required',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    return { username, email, password, name };
  }
}
