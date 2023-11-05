import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 12px;
  margin-top: 50px;
  gap: 20px;
  width: 100%;
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
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 15px;
  background-color: #ffca1b;
  width: 150px;
`;

export const SignedButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #059c4b;
  padding: 10px 20px;
  border-radius: 15px;
  width: 150px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;


export const Box = styled.View`
  width: 80%;
  height: 50px;
  color: green;
  border: 2px solid black;
  border-radius: 15px;
`;

