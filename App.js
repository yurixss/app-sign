import React from 'react';
import { StyleSheet, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { Sign } from './src/pages/sign';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default function App() {
  return (
    <View style={styles.container}>
      <Sign />
      <Toast />
    </View>
  );
}
