export interface IJWTStore {
  save(jwtToken: string): void;
  get(): string;
}