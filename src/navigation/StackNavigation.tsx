import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '../constants/constants';
import { AccountScreen, DiscoverScreen, HomeScreen, MarketScreen, WalletScreen } from '../screens';

const HomeStack = createNativeStackNavigator();
const DiscoverStack = createNativeStackNavigator();
const MarketStack = createNativeStackNavigator();
const WalletStack = createNativeStackNavigator();
const AccountStack = createNativeStackNavigator();

const screenOptions = { headerShown: false };

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={screenOptions}>
      <HomeStack.Screen name={SCREENS.HOME} component={HomeScreen} />
    </HomeStack.Navigator>
  );
};
export const DiscoverNavigator = () => {
  return (
    <DiscoverStack.Navigator screenOptions={screenOptions}>
      <DiscoverStack.Screen name={SCREENS.DISCOVER} component={DiscoverScreen} />
    </DiscoverStack.Navigator>
  );
};
export const MarketNavigator = () => {
  return (
    <MarketStack.Navigator screenOptions={screenOptions}>
      <MarketStack.Screen name={SCREENS.MARKET} component={MarketScreen} />
    </MarketStack.Navigator>
  );
};
export const WalletNavigator = () => {
  return (
    <WalletStack.Navigator screenOptions={screenOptions}>
      <WalletStack.Screen name={SCREENS.WALLET} component={WalletScreen} />
    </WalletStack.Navigator>
  );
};
export const AccountNavigator = () => {
  return (
    <AccountStack.Navigator screenOptions={screenOptions}>
      <AccountStack.Screen name={SCREENS.ACCOUNT} component={AccountScreen} />
    </AccountStack.Navigator>
  );
};
