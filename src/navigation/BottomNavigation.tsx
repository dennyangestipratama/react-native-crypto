import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  DiscoverNavigator,
  HomeNavigator,
  MarketNavigator,
  AccountNavigator,
  WalletNavigator,
} from './StackNavigation';
import { bottomTabConfigScreenOption, STACKS, ICONS } from '../constants';

const BottomTab = createBottomTabNavigator();
export default function BottomNavigation() {
  const tabTitle = (name: string) => {
    return name.split('_')[0];
  };

  return (
    <BottomTab.Navigator
      initialRouteName={STACKS.MARKET}
      screenOptions={bottomTabConfigScreenOption}
    >
      <BottomTab.Screen
        name={STACKS.HOME}
        component={HomeNavigator}
        options={({ route }) => {
          return {
            title: tabTitle(route.name),
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name={ICONS.HOME} color={color} size={size} />
            ),
          };
        }}
      />
      <BottomTab.Screen
        name={STACKS.DISCOVER}
        component={DiscoverNavigator}
        options={({ route }) => {
          return {
            title: tabTitle(route.name),
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name={ICONS.DISCOVER} color={color} size={size} />
            ),
          };
        }}
      />
      <BottomTab.Screen
        name={STACKS.MARKET}
        component={MarketNavigator}
        options={({ route }) => {
          return {
            title: tabTitle(route.name),
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name={ICONS.MARKET} color={color} size={size} />
            ),
          };
        }}
      />
      <BottomTab.Screen
        name={STACKS.WALLET}
        component={WalletNavigator}
        options={({ route }) => {
          return {
            title: tabTitle(route.name),
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name={ICONS.WALLET} color={color} size={size} />
            ),
          };
        }}
      />
      <BottomTab.Screen
        name={STACKS.ACCOUNT}
        component={AccountNavigator}
        options={({ route }) => {
          return {
            title: tabTitle(route.name),
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name={ICONS.ACCOUNT} color={color} size={size} />
            ),
          };
        }}
      />
    </BottomTab.Navigator>
  );
}
