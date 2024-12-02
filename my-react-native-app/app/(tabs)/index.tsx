import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { Text, View } from '../../components/Themed';
import { TouchableOpacity } from 'react-native';

export default function TabOneScreen() {
  const colorScheme = useColorScheme(); // Obtiene el esquema de color (claro u oscuro)

  return (
    <View style={styles.container}>
      <View style={[styles.card, colorScheme === 'dark' && styles.cardDark]}>
        <View style={styles.cardImg}></View>
        <View style={styles.cardContent}>
          <Text style={[styles.cardTitle, colorScheme === 'dark' && styles.cardTitleDark]}>Project AI Store</Text>
          <Text style={[styles.cardText, colorScheme === 'dark' && styles.cardTextDark]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, rerum eos aspernatur ratione ipsum ad
            corporis distinctio sunt vel, magni at dignissimos placeat quae nobis pariatur soluta nulla debitis
            aperiam.
          </Text>
          <TouchableOpacity style={styles.cardBtn}>
            <Text style={styles.cardBtnText}>Leer más</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  card: {
    backgroundColor: '#fff', // Fondo para modo claro
    borderRadius: 8,
    elevation: 3, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginBottom: 16,
    width: '100%',
    maxWidth: 350,
    position: 'relative',
  },
  cardDark: {
    backgroundColor: '#333', // Fondo para modo oscuro
  },
  cardImg: {
    height: 200,
    backgroundColor: '#e0e0e0',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  cardContent: {
    padding: 16,
    paddingTop: 50,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333', // Color para modo claro
    marginBottom: 8,
  },
  cardTitleDark: {
    color: '#fff', // Color para modo oscuro
  },
  cardText: {
    fontSize: 14,
    color: '#666', // Color para modo claro
    marginBottom: 16,
  },
  cardTextDark: {
    color: '#ddd', // Color para modo oscuro
  },
  cardBtn: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  cardBtnText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
});