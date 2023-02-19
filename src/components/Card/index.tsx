import { Feather, FontAwesome } from '@expo/vector-icons';
import { format } from 'date-fns';
import { Checkbox, Text, useToast } from 'native-base';
import { useEffect, useState } from 'react';
import { PutFinishTask } from '../../services/tasks/requests';
import { Actions, Container, Info, InfoItem, Tag } from './styles';
import { CardProps } from './types';

function Card({ title, tag, id, date, hour, finish, onDeleteTask }: CardProps) {
  const dateFormatted = new Date(date);
  const hourFormatted = new Date(hour);
  const [isFinish, setIsFinish] = useState(finish);
  const toast = useToast();

  const time = format(hourFormatted, 'kk:mm');
  const day = format(dateFormatted, 'dd/MM');

  const handleFinishTask = async () => {
    const data = {
      description: title,
      tag,
      date,
      hour,
      finish: true,
    };

    try {
      await PutFinishTask(id, data);
    } catch {
      toast.show({
        bg: 'red.400',
        description: 'Erro ao finalizar tarefa.',
      });
    }
  };

  useEffect(() => {
    if (isFinish) {
      handleFinishTask();
    }
  }, [isFinish]);

  return (
    <Container>
      <Actions>
        <Checkbox
          isDisabled={isFinish}
          isChecked={isFinish}
          onChange={setIsFinish}
          value="finish"
          colorScheme="success"
          accessibilityLabel="tarefa finalizada."
        />
        <Text textDecorationLine={isFinish ? 'line-through' : ''}>{title}</Text>
        <FontAwesome
          onPress={() => onDeleteTask(id)}
          name="trash-o"
          size={24}
          color="red"
        />
      </Actions>
      <Info>
        <InfoItem>
          <Feather name="clock" size={24} color="black" />
          <Text>{time}</Text>
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
