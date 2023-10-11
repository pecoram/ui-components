import { View, Text } from '@lightningjs/solid';
import styles from './Badge.styles';

const Badge = props => {
  return (
    <View style={styles.container} {...props}>
      <Text style={styles.textStyles}>{props.children}</Text>
    </View>
  );
};

export default Badge;
