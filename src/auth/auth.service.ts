import { Injectable } from "@nestjs/common/decorators";
@Injectable()
export class AuthService {
  signin() {
    return { sms: "I am signed in" };
  }
  signup() {
    return { sms: "I am signed up" };
  }
}
