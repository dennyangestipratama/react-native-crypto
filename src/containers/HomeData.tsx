import { useState } from 'react';
import { View, FlatList, ActivityIndicator, RefreshControl } from 'react-native';

import { useSupportedCurrencies } from '../hooks/useSupportedCurrencies';
import { HomeDataList } from './HomeDataList';
import { Sort } from '../components/Sort';
import { periodOptions } from '../constants';

const HomeData = () => {
  const { data, refetch } = useSupportedCurrencies();

  const [selectedPeriod, setSelectedPeriod] = useState<string>('day');
  const [isRefresh, setIsRefresh] = useState<boolean>(false);
  const handleRefresh = () => {
    setIsRefresh(true);
    refetch();
    setIsRefresh(false);
  };

  const handleSelectPeriod = (value: string) => {
    setSelectedPeriod(value);
  };

  const filteredData = data?.payload.filter((x) => x.currencySymbol !== 'Rp');

  return (
    <View className="">
      {isRefresh && <ActivityIndicator />}
      <Sort data={periodOptions} selectedValue={selectedPeriod} onChange={handleSelectPeriod} />
      <FlatList
        initialNumToRender={10}
        data={filteredData}
        renderItem={(currency) => (
          <HomeDataList currency={currency.item} selectedPeriod={selectedPeriod} />
        )}
        refreshControl={<RefreshControl refreshing={isRefresh} onRefresh={handleRefresh} />}
      />
    </View>
  );
};

export default HomeData;
