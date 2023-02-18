import { AntDesign } from '@expo/vector-icons';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Button, Icon, ScrollView, VStack } from 'native-base';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { Actions, Container, TextPrimary, Wrapper } from './styles';
import { TasksProps } from './types';

function Tasks({ navigation }: TasksProps) {
  const today = format(new Date(), "eeee, dd 'de' MMMM", { locale: ptBR });

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
          <Card
            id={1}
            title="Criar função lambda para agendar pagamentos"
            tag="Q2Pay"
            date={new Date()}
          />
          <Card
            id={1}
            title="Criar função lambda para agendar pagamentos"
            tag="Q2Pay"
            date={new Date()}
          />
          <Card
            id={1}
            title="Criar função lambda para agendar pagamentos"
            tag="Q2Pay"
            date={new Date()}
          />
          <Card
            id={1}
            title="Criar função lambda para agendar pagamentos"
            tag="Q2Pay"
            date={new Date()}
          />
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
