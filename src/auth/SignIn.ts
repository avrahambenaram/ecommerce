import { IECommerceUserAPI } from '@/network/IEcommerceUserAPI';
import { SignInDTO } from './dto/SignIn.dto';
import { IJWTStore } from './store/IJWTStore';

export class SignIn {

  constructor(
    private ecommerceUserAPI: IECommerceUserAPI,
    private jwtStore: IJWTStore,
  ) {}

  async execute(props: SignInDTO) {
    const jwtToken = await this.ecommerceUserAPI.signIn(props);
    await this.jwtStore.save(jwtToken);
  }
}