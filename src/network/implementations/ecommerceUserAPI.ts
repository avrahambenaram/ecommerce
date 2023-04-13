import { CreateUserDTO, IECommerceUserAPI, SignInDTO } from '../IEcommerceUserAPI';
import { IEcommerceAPIMeta } from '../IEcommerceAPIMeta';

export function useEcommerceUserAPI(ecommerceAPIMeta: IEcommerceAPIMeta): IECommerceUserAPI {
  async function signIn(props: SignInDTO): Promise<string> {
    try {
      ecommerceAPIMeta.loading = true;
      return 'jwt_token';
    } catch(err: any) {
      ecommerceAPIMeta.error = 'Error while signing in';
      return 'failure';
    } finally {
      ecommerceAPIMeta.loading = false;
    }
  }

  async function create(props: CreateUserDTO): Promise<string> {
    try {
      ecommerceAPIMeta.loading = true;
      return 'jwt_token';
    } catch(err: any) {
      ecommerceAPIMeta.error = 'Error while signing up';
      return 'failure';
    } finally {
      ecommerceAPIMeta.loading = false;
    }
  }

  return {
    signIn,
    create,
  }
}