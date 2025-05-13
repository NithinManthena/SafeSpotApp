// app/(tabs)/dashboard.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Dashboard!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00FFFF', // Same as login screen
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0000FF', // Blue color for title
  },
});

export default Dashboard;
