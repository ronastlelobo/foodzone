import {Text, View} from 'react-native';
import {styles} from './Bill.styles';

const Bill = ({total}: {total: number}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.totalText}>Grand Total</Text>
      <Text style={styles.totalText}>₹{total}</Text>
    </View>
  );
};

export default Bill;
