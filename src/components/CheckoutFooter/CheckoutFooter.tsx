import {View} from 'react-native';
import {styles} from './CheckoutFooter.styles';
import Button from '../Button/Button';
import {Theme} from '../../utils/Theme';

const CheckoutFooter = () => {
  return (
    <View style={styles.container}>
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
