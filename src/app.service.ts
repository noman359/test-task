import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { userDto, loginDto } from './customer.dto';

@Injectable()
export class AppService {
  constructor(private dbService: PrismaService) { }

  getHello(): string {
    return 'Hello World!';
  }


  async login(login: loginDto) {
    let customer = await this.dbService.customers.findFirst({
      where: {
        email: String(login.email),
        password: String(login.password)
      }
    })
    console.log(customer)
    if (!customer) {
      return { "message": 'Customer not found' }
    }
    else {
      return { "message": 'Customer loggedIn Successfully' }
    }
  }


  async signIn(userDto: userDto): Promise<Object> {
    let customer = {}
    if (userDto.password === userDto.confirm_password) {
      customer = await this.dbService.customers.create({ data: { phone_number: String(userDto.phone_number), name: String(userDto.name), password: String(userDto.password), email: String(userDto.email) } })
    } else {
      throw new Error("password Doesnot match")
    }
    return customer
  }
}
