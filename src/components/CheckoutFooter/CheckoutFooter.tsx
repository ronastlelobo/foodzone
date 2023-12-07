import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './CheckoutFooter.styles';
import Button from '../Button/Button';
import {Theme} from '../../utils/Theme';

const CheckoutFooter = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, {paddingBottom: insets.bottom}]}>
      <Button
        onPress={() => {}}
        label="Proceed with Payment"
        bgColor={Theme.colors.black}
        color={Theme.colors.white}
      />
    </View>
  );
};

export default CheckoutFooter;
