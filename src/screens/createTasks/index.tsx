import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import {
  Button,
  FormControl,
  HStack,
  Icon,
  Input,
  useToast,
  WarningOutlineIcon,
} from 'native-base';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Header } from '../../components/Header';
import { PostCreateTasks } from '../../services/tasks/requests';
import { Tag, TasksData } from '../../services/tasks/types';
import { Container, ContainerTags, Form, Infos, TextPrimary } from './styles';
import {
  CreateTasksProps,
  FormCreateTasksSchema,
  FormCreateTasksSchemaType,
} from './types';

function CreateTasks({ navigation }: CreateTasksProps) {
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [tag, setTag] = useState<Tag>('Q2BANK');
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormCreateTasksSchemaType>({
    defaultValues: {
      description: '',
    },
    resolver: zodResolver(FormCreateTasksSchema),
  });
  const toast = useToast();

  const onSubmit = async (data: FormCreateTasksSchemaType) => {
    if (!data.description) return;

    const formattedData: TasksData = {
      description: data.description,
      hour: time,
      date,
      tag,
      finish: 'Pendente',
    };

    try {
      await PostCreateTasks(formattedData);
      toast.show({
        bg: 'green.400',
        description: 'Tarefa criada com sucesso.',
      });
      navigation.navigate('Tasks');
    } catch (err) {
      toast.show({
        bg: 'red.400',
        description: 'Erro ao criar tarefa',
      });
    }
  };

  const onTimePickerChange = (event: any, selectedTime: any) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false);
    setTime(currentTime);
  };

  const onDatePickerChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <Container>
      <Header />
      <Infos>
        <TextPrimary>Crie uma tarefa</TextPrimary>
        <TextPrimary fontSize={16}>
          Descreva brevemente a sua tarefa e adicione um prazo.
        </TextPrimary>
      </Infos>
      <Form>
        <Controller
          control={control}
          name="description"
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormControl isInvalid={Boolean(errors?.description?.message)}>
              <FormControl.Label>
                Dê um título para a sua tarefa
              </FormControl.Label>
              <Input
                type="text"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="content-paste" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
                placeholder="Descrição tarefas"
                w="100%"
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                {errors?.description?.message}
              </FormControl.ErrorMessage>
            </FormControl>
          )}
        />

        <FormControl>
          <FormControl.Label>Horário limite</FormControl.Label>
          <Button
            justifyContent="flex-start"
            w="100%"
            leftIcon={<AntDesign name="clockcircleo" />}
            variant="outline"
            onPress={() => setShowTimePicker(true)}
          >
            {format(time, 'kk:mm') || '12:00'}
          </Button>
          {showTimePicker && (
            <DateTimePicker
              value={time}
              mode="time"
              is24Hour={true}
              onChange={onTimePickerChange}
            />
          )}
        </FormControl>

        <FormControl>
          <FormControl.Label>Data limite</FormControl.Label>
          <Button
            justifyContent="flex-start"
            w="100%"
            leftIcon={<AntDesign name="calendar" />}
            variant="outline"
            onPress={() => setShowDatePicker(true)}
          >
            {format(date, 'dd/MM') || '12/12'}
          </Button>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              minimumDate={new Date()}
              onChange={onDatePickerChange}
            />
          )}
        </FormControl>

        <ContainerTags>
          <TextPrimary fontSize={16}>Selecione uma empresa:</TextPrimary>
          <HStack marginTop={3} w="100%" justifyContent="space-evenly">
            <Button
              size="sm"
              variant="outline"
              colorScheme={tag === 'Q2BANK' ? 'dark' : 'primary'}
              bgColor={tag === 'Q2BANK' ? '#006AFF' : '#fff'}
              onPress={() => setTag('Q2BANK')}
            >
              Q2BANK
            </Button>
            <Button
              size="sm"
              variant="outline"
              colorScheme={tag === 'Q2PAY' ? 'dark' : 'primary'}
              bgColor={tag === 'Q2PAY' ? '#006AFF' : '#fff'}
              onPress={() => setTag('Q2PAY')}
            >
              Q2PAY
            </Button>
            <Button
              size="sm"
              variant="outline"
              colorScheme={tag === 'Q2INGRESSOS' ? 'dark' : 'primary'}
              bgColor={tag === 'Q2INGRESSOS' ? '#006AFF' : '#fff'}
              onPress={() => setTag('Q2INGRESSOS')}
            >
              Q2INGRESSOS
            </Button>
          </HStack>
        </ContainerTags>

        <Button
          leftIcon={<Icon as={AntDesign} name="plus" size="md" />}
          marginTop={6}
          bgColor="#006AFF"
          onPress={handleSubmit(onSubmit)}
        >
          Salvar tarefa
        </Button>
      </Form>
    </Container>
  );
}

export { CreateTasks };
