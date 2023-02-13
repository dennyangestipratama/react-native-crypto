import { View, Text, TouchableOpacity } from 'react-native';

import { CryptoCurrencyInterface, CryptoPriceInterface } from '../interfaces/interfaces';
import { usePriceChanges } from '../hooks/usePriceChanges';
import { Currency, Logo, Percentage } from '../components';
import { periodOptions } from '../constants';

interface HomeDataListInterface {
  currency: CryptoCurrencyInterface;
  selectedPeriod: string;
}

export const HomeDataList: React.FC<HomeDataListInterface> = ({ currency, selectedPeriod }) => {
  const { currencySymbol, color, logo, name } = currency;
  const { data: sortedCryptoData } = usePriceChanges();

  const symbol = currencySymbol.toLowerCase();
  const getLatestPrice: CryptoPriceInterface | undefined = sortedCryptoData?.[symbol];
  const findSelectedPeriod = periodOptions.find((selected) => {
    return selected.value === selectedPeriod;
  });

  return (
    <TouchableOpacity className="p-4 border-t flex flex-row flex-grow items-center border-custom-grey-01">
      <Logo color={color} uri={logo} />
      <View className="pl-5 flex flex-row grow justify-between">
        <View>
          <Text className="font-semibold">{name}</Text>
          <Text className="text-custom-grey-00">{currencySymbol}</Text>
        </View>
        {getLatestPrice && (
          <View>
            <Currency number={Number(getLatestPrice.latestPrice)} />
            <Percentage latestPrice={getLatestPrice[findSelectedPeriod?.value] || '0.00'} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};
