import {Pressable, Text} from 'react-native';
import {styles} from './Button.styles';

interface Button {
  onPress(): void;
  label: string;
}

const Button = ({onPress, label = ''}: Button) => {
  return (
    <Pressable onPress={onPress} style={styles.doneBtn}>
      <Text>{label}</Text>
    </Pressable>
  );
};

export default Button;
