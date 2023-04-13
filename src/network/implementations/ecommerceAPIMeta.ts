import { useState } from 'react';
import { IEcommerceAPIMeta } from '../IEcommerceAPIMeta';

export function useEcommerceAPIMeta(): IEcommerceAPIMeta {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  return {
    get loading() {
      return loading;
    },
    set loading(newLoading: boolean) {
      setLoading(newLoading);
    },
    
    get error() {
      return error;
    },
    set error(newError: string) {
      setError(newError);
    }
  }
}