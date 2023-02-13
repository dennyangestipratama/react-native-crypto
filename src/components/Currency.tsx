import { Text } from 'react-native';
import { currencyFormatter } from '../helpers/helpers';
import { CurrencyInterface } from '../interfaces/interfaces';

export const Currency: React.FC<CurrencyInterface> = ({ number }) => {
  return <Text className="text-right text-sm font-bold">{currencyFormatter(number)}</Text>;
};
