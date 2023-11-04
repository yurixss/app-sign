import React, { useState, useEffect } from 'react';
import {
  SignContainer, Title, SignButton, ButtonText, SignImage, UserSign, Line, SignText
} from './styles';
import { Text } from 'react-native';
import Toast from 'react-native-toast-message';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Network from 'expo-network';

import * as Font from 'expo-font';


export function Sign() {
  const [location, setLocation] = useState(null);
  const [signed, setSigned] = useState(false);
  const { deviceName } = Constants;
  const { deviceId } = Constants;
  const [ip, setIp] = useState(null);

  const sign = () => {
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: 'Assinado com sucesso',
    });
    setSigned(true);
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

  let [fontsLoaded] = Font.useFonts({
    'Allura-Regular': require('/Users/yurixss/app-sign/assets/fonts/Allura-Regular.ttf'),
  });

  return (
    <SignContainer>
      <Title>
        Leia e assine o documento abaixo:
      </Title>

      <SignImage source={{ uri: '/Users/yurixss/app-sign/assets/sign.jpg' }} />

      <Text>Clique no botão para assinar</Text>

      <UserSign>
        {
          signed && (
            <SignText>Yuri Nunes</SignText>
          )
        }
        <Line />
      </UserSign>

      <SignButton onPress={() => sign()}>
        <ButtonText>Assinar</ButtonText>
      </SignButton>

    </SignContainer>
  );
}
