import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import Toast from 'react-native-toast-message';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Network from 'expo-network';
import {
  SignContainer, Title, SignButton, ButtonText, SignImage,
} from './styles';

export function Sign() {
  const { deviceName } = Constants;
  const { deviceId } = Constants;
  const [location, setLocation] = useState(null);
  const [ip, setIp] = useState(null);

  const handleSign = () => {
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: 'Assinado com sucesso',
    });
  };

  useEffect(() => {
    (async () => {
      await Location.requestForegroundPermissionsAsync();
      const locationInfo = await Location.getCurrentPositionAsync({});
      setLocation(locationInfo);

      const { ipAddress } = await Network.getIpAddressAsync();
      setIp(ipAddress);
    })();
  }, []);

  if (location) {
    const { coords } = location;
    const { latitude, longitude } = coords;
  }

  return (
    <SignContainer>
      <Title>
        Leia e assine o documento abaixo:
      </Title>

      <SignImage source={{ uri: '/Users/yurixss/app-sign/assets/sign.jpg' }} />

      <Text>Clique no botão para assinar</Text>

      <UserSign/>

      <SignButton onPress={() => handleSign()}>
        <ButtonText>Assinar</ButtonText>
      </SignButton>

    </SignContainer>
  );
}
