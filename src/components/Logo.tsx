import { View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { LogoInterface } from '../interfaces/interfaces';

export const Logo: React.FC<LogoInterface> = ({ uri, color, width = 32, height = 32 }) => {
  return (
    <View>
      <SvgUri uri={uri} color={color} width={width} height={height} />
    </View>
  );
};
