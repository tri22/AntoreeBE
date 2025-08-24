import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { userList } from './data';
import { User } from './entities/user.entity';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  register(registerUserDto: RegisterUserDto) {
    const user = new User()
    user.email = registerUserDto.email;
    user.password = registerUserDto.password;
    user.id = userList.length +1;
    user.role = 'user'
    userList.push(user)
    return user;
  }

  login(loginUserDto: LoginUserDto) {
    const userFound = userList.find(user => user.email === loginUserDto.email);
    if(!userFound){
      throw new NotFoundException('No user found');
    }
    const isMatch = bcrypt.compareSync(loginUserDto.password, userFound.password);
    if(isMatch){
      throw new BadRequestException('Login failed');
    }
    return userFound;
  }


  create(createUserDto: CreateUserDto) {
    const nextId = userList.length + 1;

    const user: User = {
      ...createUserDto, 
      id: nextId,
      rating: 0,
      role: 'user',
      email: '',
      password: ''
    };
   
    return user;
  }

  findAllTeacher() {
    if (userList.length === 0) {
      throw new NotFoundException('No user found');
    }
    const teachers = userList.filter(user => user.role === 'teacher');
    return teachers;
  }


  findOne(id: number) {
    const idx = userList.findIndex(user => user.id == id)
    if (idx == -1) {
      throw new BadRequestException('Invalid user ID');
    }
    return userList[idx];
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    // Tìm index user cần update
    const idx = userList.findIndex(user => user.id === id);

    if (idx === -1) {
      // Nếu không tìm thấy → ném lỗi BadRequest
      throw new BadRequestException('Invalid user ID');
    }

    // Cập nhật các field được truyền trong updateUserDto
    userList[idx] = {
      ...userList[idx],       // giữ nguyên các field cũ
      ...updateUserDto        // ghi đè các field được update
    };

    // Trả về user đã update
    return userList[idx];
  }


  remove(id: number) {
    const idx = userList.findIndex(user => user.id == id)
    if (idx !== -1) {
      userList.splice(idx, 1);
      return "Delete successfully!"
    } else {
      throw new BadRequestException('Invalid user ID');
    }
  }
}
