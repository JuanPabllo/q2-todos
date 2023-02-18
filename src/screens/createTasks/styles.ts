import styled from 'styled-components/native';

type TextPrimaryProps = {
  fontSize?: number;
};

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100%;
  padding: 0 24px;
`;

export const Infos = styled.View`
  margin: 34px 0;
`;

export const Form = styled.View`
  align-items: center;
`;

export const TextPrimary = styled.Text<TextPrimaryProps>`
  font-weight: 400;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '20px')};
  color: #262833;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
