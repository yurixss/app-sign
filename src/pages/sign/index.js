import React, { useState, useEffect } from 'react';
import * as Styled from './styles';
import * as Location from 'expo-location';
import * as Network from 'expo-network';
import Toast from 'react-native-toast-message';
import Constants from 'expo-constants';
import Ionicons from '@expo/vector-icons/Ionicons';
import SignFont from '../../components/SignFont';
import { api } from '../../services/api';

export function Sign() {
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [ip, setIp] = useState(null);
  const { deviceName, deviceId } = Constants;

  useEffect(() => {
    (async () => {
      await Location.requestForegroundPermissionsAsync();
      const locationInfo = await Location.getCurrentPositionAsync({});
      setLocation(locationInfo);

      const { ipAddress } = await Network.getIpAddressAsync();
      setIp(ipAddress);
    })();
  }, []);

  const sign = () => {
    setLoading(true);

    const { coords } = location;
    const { latitude, longitude } = coords;

    const data = {
      ip: ip,
      device_model: deviceName,
      device_id: deviceId,
      location: latitude + ',' + longitude,
    };

    api.post('/sign/', {
      data
    })
      .then(response => {
        console.log(response);

        Toast.show({
          type: 'success',
          position: 'bottom',
          text1: 'Assinatura realizada com sucesso!',
        });

        setSigned(true);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Styled.Container>
      <SignFont>
        Leia e assine o documento abaixo:
      </SignFont>

      <Styled.SignImage source={{ uri: '/Users/yurixss/app-sign/assets/sign.jpg'}} />

      <Styled.Box>
        {signed && (
          <SignFont>Yuri Nunes</SignFont>
          )
        }
      </Styled.Box>

      {!signed ? (
        <Styled.SignButton onPress={() => sign()}>
          <Styled.ButtonText>
            {loading ? 'Carregando...' : 'Assinar'}
          </Styled.ButtonText>
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
