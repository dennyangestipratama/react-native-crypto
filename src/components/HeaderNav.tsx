import { View, Text, TouchableOpacity, GestureResponderEvent } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ICONS } from '../constants';

interface HeaderNavInterface {
  title: string;
}
export const HeaderNav: React.FC<HeaderNavInterface> = ({ title }) => {
  return (
    <View className="p-4 flex flex-row justify-between bg-white">
      <View>
        <Text className="font-bold text-3xl">{title}</Text>
      </View>
      <View className="flex flex-row items-center">
        <View className="mr-3">
          <TouchableOpacity>
            <AntDesign name={ICONS.STAR} size={28} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <AntDesign name={ICONS.SEARCH} size={28} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
