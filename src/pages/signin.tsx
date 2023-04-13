import { SignInTemplate } from '@/components/templates/SignIn';
import { useSignIn } from '@/hooks/useSignIn';

import { useEcommerceAPIMeta } from '@/network/implementations/ecommerceAPIMeta';
import { useEcommerceUserAPI } from '@/network/implementations/ecommerceUserAPI';
import { JWTStore } from '@/auth/store/implementations/JWTStore';
import { SignInUseCase } from '@/auth/SignIn';

export default function SignIn() {

  const ecommerceAPIMeta = useEcommerceAPIMeta();
  const ecommerceUserAPI = useEcommerceUserAPI(ecommerceAPIMeta);
  const jwtStore = new JWTStore()
  const signInUseCase = new SignInUseCase(ecommerceUserAPI, jwtStore);
  const { models, operations } = useSignIn();

  return (
    <SignInTemplate
      signInForm={{
        ...models,
        ...operations,
        async onSubmit(evt) {
          evt.preventDefault();
          await signInUseCase.execute({
            email: models.email,
            password: models.password,
          })
        },
      }}
    />
  )
}