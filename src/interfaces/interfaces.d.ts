import type AntDesignIconNameType from '@expo/vector-icons/build/AntDesign';

interface CryptoPriceInterface {
  pair: string;
  latestPrice: string;
  day: null | string;
  week: null | string;
  month: null | string;
  year: null | string;
}

interface CryptoCurrencyInterface {
  currencyGroup: string;
  color: string;
  currencySymbol: string;
  name: string;
  logo: string;
  decimal_point: number;
  listingDate: Date;
  wallets: WalletInterface[];
}

interface SortedCryptoInterface {
  [key: string]: CryptoPriceInterface;
}

interface WalletInterface {
  currencyGroup: string;
  tokenSymbol: string;
  decimal_point: number;
  tokenType: string;
  blockchain: string;
  explorer: string;
  listingDate: Date;
  blockchainName: string;
  logo: string;
}

interface ResponseInterface<T, U = void> {
  code: string;
  message: string;
  payload: T;
  [key: string]: U;
}

interface CategoryListInterface {
  title: string;
  icon: AntDesignIconNameType;
}

type RootStackParamList = {
  Home: undefined;
  Discover: undefined;
  Market: undefined;
  Product: { symbol: string };
  Watchlist: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

interface RouteInterface<Params> {
  key: string;
  name: string;
  params: Params;
  path: string;
}

interface LogoInterface {
  uri: string;
  color: string;
  width?: number;
  height?: number;
}

interface CurrencyInterface {
  number: number;
}

interface PickerOption<> {
  label: string;
  value: string;
}

interface PickerProps<T> {
  data: PickerOption[];
  selectedValue: T;
  onChange: (value: T) => void;
}

export {
  CryptoPriceInterface,
  CryptoCurrencyInterface,
  SortedCryptoInterface,
  WalletInterface,
  ResponseInterface,
  CategoryListInterface,
  RootStackParamList,
  RouteInterface,
  LogoInterface,
  CurrencyInterface,
  PickerOption,
  PickerProps,
};
