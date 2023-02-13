import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { periodOptions } from '../constants';
import { PickerProps } from '../interfaces/interfaces';

export const Sort = <T,>({ data, selectedValue, onChange }: PickerProps<T>) => {
  return (
    <View className="flex flex-row items-center justify-between pl-4 flex-grow">
      <Text>Sort by</Text>
      <Picker
        style={{ width: 108 }}
        selectedValue={selectedValue}
        onValueChange={onChange}
        itemStyle={{ fontSize: 4 }}
      >
        {data.map((option) => (
          <Picker.Item
            key={option.value}
            label={option.label}
            value={option.value}
            style={{ fontSize: 14 }}
          />
        ))}
      </Picker>
    </View>
  );
};
