import styled from 'styled-components/native';

type TextPrimaryProps = {
  fontSize?: number;
};

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100%;
`;

export const Wrapper = styled.View`
  padding: 0 24px;
  margin-top: 52px;
`;

export const Actions = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 38px;
`;

export const TextPrimary = styled.Text<TextPrimaryProps>`
  font-weight: 400;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '20px')};
  color: #262833;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
