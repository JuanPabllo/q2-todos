import { AntDesign } from '@expo/vector-icons';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Button, Icon, ScrollView, useToast, VStack } from 'native-base';
import { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { GetTasks } from '../../services/tasks/requests';
import { TasksDataResponse } from '../../services/tasks/types';
import { Actions, Container, TextPrimary, Wrapper } from './styles';
import { TasksProps } from './types';

function Tasks({ navigation }: TasksProps) {
  const [data, setData] = useState<TasksDataResponse[]>([]);
  const today = format(new Date(), "eeee, dd 'de' MMMM", { locale: ptBR });
  const toast = useToast();

  const handleGetAllTasks = async () => {
    try {
      const response = await GetTasks();
      setData(response);
    } catch (err) {
      toast.show({
        bg: 'red.400',
        description: 'Tarefas não encontradas.',
      });
    }
  };

  useEffect(() => {
    handleGetAllTasks();
  }, []);

  return (
    <Container>
      <Header />
      <Wrapper>
        <Actions>
          <VStack>
            <TextPrimary>Tarefas de hoje</TextPrimary>
            <TextPrimary fontSize={16}>{today}</TextPrimary>
          </VStack>
          <Button
            variant="outline"
            borderColor="#006AFF"
            borderWidth="1px"
            w={35}
            h={38}
            leftIcon={<Icon as={AntDesign} name="filter" size="md" />}
          />
        </Actions>
        <ScrollView w={['400', '700']} h={450}>
          {data?.map((task) => (
            <Card
              date={task.date}
              tag="Q2pay"
              title={task.description}
              id={task.id}
              key={task.id}
            />
          ))}
        </ScrollView>
        <Button
          leftIcon={<Icon as={AntDesign} name="plus" size="md" />}
          marginTop={6}
          bgColor="#006AFF"
          onPress={() => navigation.navigate('Create')}
        >
          Criar nova tarefa
        </Button>
      </Wrapper>
    </Container>
  );
}

export { Tasks };
