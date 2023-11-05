import React, { useState, useEffect } from 'react';
import * as Styled from './styles';
import * as Location from 'expo-location';
import * as Network from 'expo-network';
import Toast from 'react-native-toast-message';
import Constants from 'expo-constants';
import Ionicons from '@expo/vector-icons/Ionicons';
import SignFont from '../../components/SignFont';

export function Sign() {
  const [signed, setSigned] = useState(false);
  const [location, setLocation] = useState(null);
  const [ip, setIp] = useState(null);
  const { deviceName } = Constants;
  const { deviceId } = Constants;

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

  return (
    <Styled.Container>
      <Styled.Title>
        Leia e assine o documento abaixo:
      </Styled.Title>

      <Styled.SignImage source={{ uri: '/Users/yurixss/app-sign/assets/sign.jpg' }} />

      <Styled.Box>
        {signed && (
          <SignFont>Yuri Nunes</SignFont>
          )
        }
      </Styled.Box>

      {!signed ? (
        <Styled.SignButton onPress={() => sign()}>
          <Styled.ButtonText>Assinar</Styled.ButtonText>
        </Styled.SignButton>
      ): (
        <Styled.SignedButton disabled={true}>
          <Ionicons name="md-checkmark-circle" size={24} color="white" />
          <Styled.ButtonText>Assinado</Styled.ButtonText>
        </Styled.SignedButton>
      )}

    </Styled.Container>
  );
}
