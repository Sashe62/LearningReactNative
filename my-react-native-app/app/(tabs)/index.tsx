import { StyleSheet } from 'react-native';
import Card from '../../components/Card';
import { View } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Card
        name = "Squirtle"
        attacks= {
          [
            { name: 'Water Gun', power: 40 },
            { name: 'Tackle', power: 20 },
            { name: 'Tail Whip', power: 0 },
          ]
        }
        image= 'https://w0.peakpx.com/wallpaper/347/897/HD-wallpaper-anime-pokemon-squirtle-pokemon-water-pokemon-pokemon-the-first-movie.jpg'
        color = '#6890F0'
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