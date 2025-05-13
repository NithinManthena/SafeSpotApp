// app/(tabs)/index.tsx
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { auth } from '../../firebase';

export default function IndexScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/(tabs)/main'); // Change to your actual main screen path
    } catch (error: any) {
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Safe Spot</Text>

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/(tabs)/signup')}>
        <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00FFFF' },
  title: { fontSize: 36, fontWeight: 'bold', color: '#0000FF', marginBottom: 40 },
  input: { height: 50, width: '80%', borderColor: '#888', borderWidth: 1, borderRadius: 5, marginBottom: 20, paddingLeft: 10 },
  loginButton: { backgroundColor: '#000', width: '80%', padding: 15, borderRadius: 5, alignItems: 'center' },
  loginText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  signUpText: { color: '#0000FF', fontSize: 16 },
});
