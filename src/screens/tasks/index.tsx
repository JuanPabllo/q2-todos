import { AntDesign } from '@expo/vector-icons';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import LottieView from 'lottie-react-native';
import {
  Button,
  Icon,
  ScrollView,
  Spinner,
  useToast,
  VStack,
} from 'native-base';
import { useEffect, useRef, useState } from 'react';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { GetTasks } from '../../services/tasks/requests';
import { TasksDataResponse } from '../../services/tasks/types';
import { Actions, Container, NoData, TextPrimary, Wrapper } from './styles';
import { TasksProps } from './types';

function Tasks({ navigation }: TasksProps) {
  const [data, setData] = useState<TasksDataResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const today = format(new Date(), "eeee, dd 'de' MMMM", { locale: ptBR });
  const toast = useToast();
  const animation = useRef(null);

  const handleGetAllTasks = async () => {
    setLoading(true);
    try {
      const response = await GetTasks();
      setData(response);
    } catch (err) {
      toast.show({
        bg: 'red.400',
        description: 'Tarefas não encontradas.',
      });
    } finally {
      setLoading(false);
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
        {loading && <Spinner size="lg" />}
        {data.length ? (
          <ScrollView w={['400', '700']} h={450}>
            {data.map((task) => (
              <Card
                date={task.date}
                tag={task.tag}
                title={task.description}
                id={task.id}
                key={task.id}
              />
            ))}
          </ScrollView>
        ) : (
          <NoData>
            <LottieView
              autoPlay
              loop={true}
              ref={animation}
              style={{
                width: 350,
                height: 350,
              }}
              source={require('../../assets/animations/no-data.json')}
            />
          </NoData>
        )}
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
