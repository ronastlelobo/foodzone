import {Pressable, Text} from 'react-native';
import {styles} from './Button.styles';
import {Theme} from '../../utils/Theme';

interface Button {
  onPress(): void;
  label: string;
  bgColor?: string;
  color?: string;
}

const Button = ({onPress, label = '', bgColor = '', color = ''}: Button) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.doneBtn,
        {backgroundColor: bgColor || Theme.colors.white},
      ]}>
      <Text style={[styles.buttonText, {color: color || Theme.colors.black}]}>
        {label}
      </Text>
    </Pressable>
  );
};

export default Button;
