import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { AppService } from './app.service';
import { userInfo } from 'os';
import { loginDto, userDto } from './customer.dto';

@Resolver('App')
export class AppResolver {
  constructor(private appService: AppService) { }

  @Query()
  async login(@Args('password') password: string,
    @Args('email') email: string,) {
    let login: loginDto = { email: email, password: password }
    return this.appService.login(login)
  }

  @Mutation()
  async signUp(

    @Args('name') name: string,
    @Args('phone_number') phone_number: string,
    @Args('password') password: string,
    @Args('email') email: string,
    @Args('confirm_password') confirm_password: String
  ) {
    const product = {
      name, phone_number,
      password
    };
    console.log(product)
    let user: userDto = { name: name, email: email, confirm_password: confirm_password, password: password, phone_number: phone_number }
    return this.appService.signIn(user)

  }
}
