import { StyleSheet } from 'react-native';
import Card from '../../components/Card';
import { View } from '../../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Card
        name = "Charmander"
        attacks= {
          [
            { name: 'Ember', power: 40 },
            { name: 'Metal claw', power: 20 },
            { name: 'Growl', power: 0 },
          ]
        }
        image= 'https://www.dexerto.com/cdn-image/wp-content/uploads/2023/11/15/Pokemon-TCG-Charmander.jpg?width=1200&quality=60&format=auto'
        color = '#F08030'
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
