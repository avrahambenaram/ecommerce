export interface SignInDTO {
  email: string;
  password: string;
}
export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
}

export interface IECommerceUserAPI {
  signIn(props: SignInDTO): Promise<string>;
  create(props: CreateUserDTO): Promise<string>;
}