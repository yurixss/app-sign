import React from 'react';
import { Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font';

const SignFont = (props) => {
  let [fontsLoaded] = Font.useFonts({
    'DancingScript-Bold': require('/Users/yurixss/app-sign/assets/fonts/DancingScript-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'DancingScript-Bold',
    fontSize: 16,
    alignSelf: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default SignFont;
