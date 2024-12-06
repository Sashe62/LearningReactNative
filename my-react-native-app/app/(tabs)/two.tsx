import { StyleSheet } from 'react-native';
import Card from '../../components/Card';
import { View } from '../../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Card
        name = "Bulbasaur"
        attacks= {
          [
            { name: 'Vine Whip', power: 40 },
            { name: 'Tackle', power: 20 },
            { name: 'SEX', power: 100 },
          ]
        }
        image= 'https://imagedelivery.net/5ejkUOtsMH5sf63fw6q33Q/c7ed253c-4e7a-43d6-eb49-18ece3f72500/w=449'
        color = '#78C850'
        HP = {50}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
