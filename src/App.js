import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Splasher from './pages/Splash';
import Login from './pages/Login';

export default function App() {
  return (
    <ScrollView>
      <Login/>
    </ScrollView>
    
  );
}
