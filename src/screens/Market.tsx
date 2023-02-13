import { SafeAreaView, StatusBar } from 'react-native';

import { HeaderNav } from '../components';
import HomeCategories from '../containers/HomeCategories';
import HomeData from '../containers/HomeData';

export default function Market() {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar />
      <HeaderNav title="Market" />
      <HomeCategories />
      <HomeData />
    </SafeAreaView>
  );
}
