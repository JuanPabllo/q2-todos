import { Feather, FontAwesome } from '@expo/vector-icons';
import { format } from 'date-fns';
import {
  Alert,
  Button,
  Checkbox,
  HStack,
  Slide,
  Text,
  useToast,
} from 'native-base';
import { useEffect, useState } from 'react';
import { PutFinishTask } from '../../services/tasks/requests';
import { Actions, Container, Info, InfoItem, Tag } from './styles';
import { CardProps } from './types';

function Card({ title, tag, id, date, hour, finish, onDeleteTask }: CardProps) {
  const dateFormatted = new Date(date);
  const hourFormatted = new Date(hour);
  const [isFinish, setIsFinish] = useState(finish);
  const [isOpenTop, setIsOpenTop] = useState(false);
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

        <Slide in={isOpenTop} placement="top">
          <Alert justifyContent="center" status="info" safeAreaTop={4}>
            <Alert.Icon />
            <Text color="blue.600" fontWeight="medium">
              Você tem certeza que deseja excluir essa tarefa?
            </Text>
            <HStack justifyContent="space-evenly" w="100%">
              <Button
                variant="link"
                size="sm"
                colorScheme="blue"
                onPress={() => setIsOpenTop(!isOpenTop)}
              >
                Deixar como está
              </Button>
              <Button
                variant="outline"
                colorScheme="dark"
                size="sm"
                bgColor="#006AFF"
                onPress={() => {
                  onDeleteTask(id);
                  setIsOpenTop(!isOpenTop);
                }}
              >
                Excluir
              </Button>
            </HStack>
          </Alert>
        </Slide>

        <FontAwesome
          onPress={() => setIsOpenTop(!isOpenTop)}
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
