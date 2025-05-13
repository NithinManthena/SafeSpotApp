// app/(tabs)/main.tsx
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Main() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Safe Spot!</Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
        }}
      />
      <Text style={styles.message}>Your safety companion at every step 🚶‍♀️🌏</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00796b',
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    color: '#004d40',
    textAlign: 'center',
  },
});
