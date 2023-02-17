import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100%;
`;

export const Header = styled.View`
  width: 100%;
  height: 80px;
  align-items: flex-start;
  padding: 40px 0 0 35px;
`;

export const Form = styled.View`
  margin-top: 38px;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.View`
  margin-top: 64px;
  align-items: center;
  justify-content: space-between;
  height: 300px;
`;

export const TextPrimary = styled.Text`
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

  color: #262833;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
