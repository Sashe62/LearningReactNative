import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Card = ({ name, attacks, image, color, HP }) => {
  const dynamicStyles = StyleSheet.create({
    header: {
      backgroundColor: color,
      padding: 10,
    },
    hpContainer: {
      backgroundColor: color,
      padding: 5,
      alignItems: 'center',
    },
    footer: {
      padding: 10,
      backgroundColor: color,
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

  return (
    <View style={styles.card}>
      <View style={dynamicStyles.header}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={dynamicStyles.hpContainer}>
        <Text style={styles.hp}>HP: {HP}</Text>
      </View>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <View style={dynamicStyles.footer}>
        {attacks.map((attack, index) => (
          <View key={index} style={styles.attack}>
            <Text style={dynamicStyles.attackName}>{attack.name}</Text>
            <Text style={dynamicStyles.attackPower}>{attack.power}</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
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
  attack: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Card;