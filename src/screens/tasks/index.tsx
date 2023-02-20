import { AntDesign } from '@expo/vector-icons';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import LottieView from 'lottie-react-native';
import {
  Button,
  Divider,
  Icon,
  ScrollView,
  Spinner,
  useToast,
  VStack,
} from 'native-base';
import { useEffect, useRef, useState } from 'react';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { FilterModal } from '../../components/Modals/FilterModal';
import { DeleteTasks, GetTasks } from '../../services/tasks/requests';
import { Finish, Tag, TasksDataResponse } from '../../services/tasks/types';
import { formatterDataFinished, formatterDataToday } from './helpers';
import { Actions, Container, NoData, TextPrimary, Wrapper } from './styles';
import { TasksProps } from './types';

function Tasks({ navigation }: TasksProps) {
  const [data, setData] = useState<TasksDataResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState<number>();
  const today = format(new Date(), "eeee, dd 'de' MMMM", { locale: ptBR });
  const toast = useToast();
  const animation = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [tag, setTag] = useState<Tag | undefined>();
  const [finish, setFinish] = useState<Finish | undefined>();

  const handleGetAllTasks = async () => {
    setLoading(true);
    try {
      const response = await GetTasks({ finish, tag });
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

  const handleDeleteTask = async (id: number): Promise<void> => {
    try {
      await DeleteTasks(id);
      setId(id);
    } catch {
      toast.show({
        bg: 'red.400',
        description: 'Erro ao excluir tarefa.',
      });
    }
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      handleGetAllTasks();
    });
  }, [navigation]);

  useEffect(() => {
    handleGetAllTasks();
  }, [id, tag, finish]);

  return (
    <Container>
      <FilterModal
        setShowModal={setShowModal}
        showModal={showModal}
        finish={finish}
        setFinish={setFinish}
        setTag={setTag}
        tag={tag}
      />
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
            onPress={() => setShowModal(true)}
            borderWidth="1px"
            w={35}
            h={38}
            leftIcon={<Icon as={AntDesign} name="filter" size="md" />}
          />
        </Actions>
        {loading && <Spinner size="lg" />}
        {data.length ? (
          <ScrollView w={['400', '700']} h={450}>
            {formatterDataToday(data).length ? (
              formatterDataToday(data).map((task) => (
                <Card
                  date={task.date}
                  hour={task.hour}
                  tag={task.tag}
                  title={task.description}
                  id={task.id}
                  finish={task.finish === 'Finalizada'}
                  key={task.id}
                  onDeleteTask={() => handleDeleteTask(task.id)}
                  setId={() => setId(task.id)}
                />
              ))
            ) : (
              <TextPrimary fontSize={16}>
                Você não tem nada para hoje 😀
              </TextPrimary>
            )}
            <Divider my="2" bg="#ccced980" />

            <TextPrimary fontSize={18}>Concluídas</TextPrimary>

            {formatterDataFinished(data).length ? (
              formatterDataFinished(data).map((task) => (
                <Card
                  date={task.date}
                  hour={task.hour}
                  tag={task.tag}
                  title={task.description}
                  id={task.id}
                  finish={task.finish === 'Finalizada'}
                  key={task.id}
                  onDeleteTask={() => handleDeleteTask(task.id)}
                  setId={() => setId(task.id)}
                />
              ))
            ) : (
              <TextPrimary fontSize={16}>
                Você ainda não tem tarefas finalizas
              </TextPrimary>
            )}
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
