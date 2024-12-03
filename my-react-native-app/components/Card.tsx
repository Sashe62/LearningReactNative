import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Card = () => {
  const attacks = [
    { name: 'Vine Whip', power: 40 },
    { name: 'Tackle', power: 20 },
    { name: 'SEX', power: 100 },
  ];

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Bulbasaur</Text>
      </View>
      <View style={styles.hpContainer}>
        <Text style={styles.hp}>HP: 60</Text>
      </View>
      <Image
        source={{
          uri: 'https://imagedelivery.net/5ejkUOtsMH5sf63fw6q33Q/c7ed253c-4e7a-43d6-eb49-18ece3f72500/w=449',
        }}
        style={styles.image}
      />
      <View style={styles.footer}>
        {attacks.map((attack, index) => (
          <View key={index} style={styles.attack}>
            <Text style={styles.attackName}>{attack.name}</Text>
            <Text style={styles.attackPower}>{attack.power}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    overflow: 'hidden',
  },
  header: {
    backgroundColor: '#86c567',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  hpContainer: {
    backgroundColor: '#86c567',
    padding: 5,
    alignItems: 'center',
  },
  hp: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    borderWidth: 3,
    borderColor: '#FFD700', // Marco amarillo
  },
  footer: {
    padding: 10,
    backgroundColor: '#86c567', // Color verde para la sección de ataques
  },
  attacksTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  attack: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  attackName: {
    fontWeight: 'bold',
    color: '#fff', // Texto de ataques en blanco
  },
  attackPower: {
    fontSize: 20,
    color: '#fff', // Poder de ataques en blanco
  },
});

export default Card;