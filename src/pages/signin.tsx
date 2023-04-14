import { SignInTemplate } from '@/components/templates/SignIn';

import { useEcommerceAPIMeta } from '@/network/implementations/ecommerceAPIMeta';
import { useEcommerceUserAPI } from '@/network/implementations/ecommerceUserAPI';
import { JWTStore } from '@/auth/store/implementations/JWTStore';
import { SignInUseCase } from '@/auth/SignIn';

export default function SignIn() {

  const ecommerceAPIMeta = useEcommerceAPIMeta();
  const ecommerceUserAPI = useEcommerceUserAPI(ecommerceAPIMeta);
  const jwtStore = new JWTStore()
  const signInUseCase = new SignInUseCase(ecommerceUserAPI, jwtStore);

  return (
    <SignInTemplate
      signInForm={{
        onSend: signInUseCase.execute,
      }}
    />
  )
}