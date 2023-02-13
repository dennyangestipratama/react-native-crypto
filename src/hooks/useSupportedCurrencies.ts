import { useQuery } from 'react-query';

import { endpoints } from '../constants';
import { CryptoCurrencyInterface, ResponseInterface } from '../interfaces/interfaces';

const fetchSupportedCurrencies = async () => {
  const URL = endpoints.supportedCurrencies;
  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }

  return await response.json();
};

const useSupportedCurrencies = () => {
  return useQuery<ResponseInterface<CryptoCurrencyInterface[]>>(
    [endpoints.supportedCurrencies],
    () => fetchSupportedCurrencies()
  );
};
export { useSupportedCurrencies };
