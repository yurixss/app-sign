import React from 'react';
import { Text } from 'react-native';
import Toast from 'react-native-toast-message';
import {
  SignContainer, Title, SignButton, ButtonText, SignImage,
} from './styles';

export function Sign() {
  const handleSign = () => {
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: 'Assinado com sucesso',
    });
  };

  return (
    <SignContainer>
      <Title>
        Leia e assine o documento abaixo:
      </Title>

      <SignImage source={{ uri: '/Users/yurixss/app-sign/assets/sign.jpg' }} />

      <Text>Clique no botão para assinar</Text>

      <SignButton onPress={() => handleSign()}>
        <ButtonText>Assinar</ButtonText>
      </SignButton>

    </SignContainer>
  );
}
