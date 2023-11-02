import styled from 'styled-components/native';

export const SignContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  height: 100vh;
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
