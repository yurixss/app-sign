import React from 'react';
import { Text } from 'react-native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import {
  SignContainer, SignButton, ButtonText, SignImage,
} from './styles';

export function Sign() {
  const handleSign = () => {
    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Assinado com sucesso',
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
    });
  };

  return (
    <SignContainer>

      <SignImage source="/Users/yurixss/app-sign/assets/sign.jpg" />

      <Text>Clique no botão abaixo para assinar</Text>

      <SignButton onPress={() => handleSign}>
        <ButtonText>Assinar</ButtonText>
      </SignButton>

    </SignContainer>
  );
}
