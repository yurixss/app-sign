import styled from 'styled-components/native';

export const SignContainer = styled.View`
  flex: 1;
  align-items: center;
  padding: 12px;
  margin-top: 100px;
  gap: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const SignImage = styled.Image`
  width: 200px;
  height: 150px;
`;

export const SignButton = styled.TouchableOpacity`
  background: green;
  padding: 10px 20px;
  border-radius: 15px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const UserSign = styled.View`
  width: 100%;
`;

export const Line = styled.View`
  width: 100%;
  height: 10px;
  background-color: green;
  margin-top: 10px;
`;

export const SignText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
`;
