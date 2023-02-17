import { MaterialIcons } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  FormControl,
  Icon,
  Input,
  WarningOutlineIcon,
} from 'native-base';
import { Controller, useForm } from 'react-hook-form';
import { Image } from 'react-native';
import { Container, Form, Header, TextPrimary, Wrapper } from './styles';
import { FormLoginSchema, FormLoginSchemaType } from './types';

function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<FormLoginSchemaType>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(FormLoginSchema),
  });

  const onSubmit = async (data: FormLoginSchemaType): Promise<void> => {
    console.log(data);
  };

  return (
    <Container>
      <Header>
        <Image source={require('../../assets/icons/q2-logo.png')} />
      </Header>
      <Form>
        <TextPrimary>Olá, que bom te ver de novo. Vamos começar?</TextPrimary>
        <Wrapper>
          <Controller
            control={control}
            name="email"
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormControl isInvalid={Boolean(errors?.email?.message)}>
                <FormControl.Label marginLeft={3}>Email</FormControl.Label>
                <Input
                  mx="3"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  InputLeftElement={
                    <Icon
                      as={<MaterialIcons name="person" />}
                      size={5}
                      ml="2"
                      color="muted.400"
                    />
                  }
                  placeholder="Email"
                  w="100%"
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  {errors?.email?.message}
                </FormControl.ErrorMessage>
              </FormControl>
            )}
          />
          <Button
            isLoading={!isLoading}
            w={200}
            bg="#006AFF"
            onPress={handleSubmit(onSubmit)}
          >
            Entrar
          </Button>
        </Wrapper>
      </Form>
    </Container>
  );
}

export { LoginScreen };
