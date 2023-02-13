import { Text, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

import { CategoryListInterface } from '../interfaces/interfaces';

interface ButtonCategoryInterface {
  item: CategoryListInterface;
}

export const ButtonCategory: React.FC<ButtonCategoryInterface> = ({ item }) => {
  const { icon, title } = item;
  return (
    <TouchableOpacity
      key={item.title}
      className="flex flex-row items-center p-2 mx-1 border border-custom-grey-00 rounded-full"
    >
      <AntDesign name={icon} size={16} />
      <Text className="ml-2 text-xs text-custom-black-00">{title}</Text>
    </TouchableOpacity>
  );
};
