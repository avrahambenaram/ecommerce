import { IJWTStore } from '../IJWTStore';

export class JWTStore implements IJWTStore {
  save(jwtToken: string): void {
    localStorage.setItem('auth', jwtToken);
  }
  get(): string {
    return localStorage.getItem('auth') || '';
  }
}