import styled from 'styled-components/native';

export const Container = styled.View`
  width: 342px;
  height: 140px;
  border: 1px #ccced980 solid;
  border-radius: 5px;
  padding: 25px;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;

export const InfoItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 60px;
  margin-left: 12px;
`;

export const Tag = styled.Text`
  color: #094aea;
  border: 1px #094aea solid;
  padding: 3px;
  border-radius: 10px;
  font-weight: 500;
  margin-left: 12px;
`;
