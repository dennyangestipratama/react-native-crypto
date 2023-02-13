import { View, FlatList } from 'react-native';
import { ButtonCategory } from '../components';
import { categories } from '../constants';

const HomeCategories = () => {
  return (
    <View className="ml-4 mb-4">
      <FlatList
        data={categories}
        horizontal
        renderItem={(item) => <ButtonCategory item={item.item} />}
      />
    </View>
  );
};

export default HomeCategories;
