import { View, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors, ICONS } from '../constants';

interface PercentageInterface {
  latestPrice: string;
}

export const Percentage: React.FC<PercentageInterface> = ({ latestPrice }) => {
  const isDecrease = latestPrice && latestPrice[0] === '-';
  const isZero = latestPrice === '0.00';
  const isIncrease = !isDecrease && !isZero;

  const iconName = () => {
    if (isDecrease) return ICONS.DECREASE;
    if (isIncrease) return ICONS.INCREASE;
    return;
  };

  const iconColor = () => {
    if (isDecrease) return colors.red;
    if (isIncrease) return colors.green;
  };
  return (
    <View className="flex flex-row justify-end items-center">
      <AntDesign
        className={`${isIncrease ? 'self-end' : 'auto'}`}
        name={iconName()}
        color={iconColor()}
      />
      <Text
        className={`${
          isDecrease
            ? 'text-custom-red-00'
            : isIncrease
            ? 'text-custom-green-00'
            : 'text-custom-black-01'
        } ml-2 font-semibold`}
      >
        {latestPrice}%
      </Text>
    </View>
  );
};
