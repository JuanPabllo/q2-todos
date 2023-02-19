import { Feather, FontAwesome } from '@expo/vector-icons';
import { format } from 'date-fns';
import { Checkbox, Text } from 'native-base';
import { Actions, Container, Info, InfoItem, Tag } from './styles';
import { CardProps } from './types';

function Card({ title, tag, id, date }: CardProps) {
  const dateFormatted = new Date(date);

  const hour = format(dateFormatted, 'kk:mm');
  const day = format(dateFormatted, 'dd/MM');

  return (
    <Container>
      <Actions>
        <Checkbox value="finish" accessibilityLabel="tarefa finalizada." />
        <Text>{title}</Text>
        <FontAwesome name="trash-o" size={24} color="red" />
      </Actions>
      <Info>
        <InfoItem>
          <Feather name="clock" size={24} color="black" />
          <Text>{hour}</Text>
        </InfoItem>
        <InfoItem>
          <Feather name="calendar" size={24} color="black" />
          <Text>{day}</Text>
        </InfoItem>
        <Tag>{tag}</Tag>
      </Info>
    </Container>
  );
}

export { Card };
