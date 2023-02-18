import { MaterialIcons } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {
  Button,
  FormControl,
  Icon,
  Input,
  Pressable,
  useToast,
  View,
  WarningOutlineIcon,
} from 'native-base';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Image, Keyboard } from 'react-native';
import { saveSecureStore } from '../../helpers/secureStore';
import { TOKEN_KEY } from '../../services/constant';
import { auth } from '../../services/firebase';
import { Container, Form, Header, TextPrimary, Wrapper } from './styles';
import {
  FormRegisterSchema,
  FormRegisterSchemaType,
  RegisterProps,
} from './types';

function RegisterScreen({ navigation }: RegisterProps) {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormRegisterSchemaType>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(FormRegisterSchema),
  });

  const onSubmit = async (data: FormRegisterSchemaType): Promise<void> => {
    try {
      setIsLoading(true);
      Keyboard.dismiss();
      const response = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      reset();

      await saveSecureStore(TOKEN_KEY, response.user.uid);
      toast.show({
        bg: 'green.400',
        description:
          'Sucesso... Sua conta foi criada aguarde que você será redirecionado.',
      });
    } catch (err) {
      toast.show({
        bg: 'red.400',
        description: 'Email já cadastro',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Header>
        <Image source={require('../../assets/icons/q2-logo.png')} />
      </Header>
      <Form>
        <TextPrimary>Olá, seja bem vindo(a). Vamos começar?</TextPrimary>
        <Wrapper>
          <View>
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
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <FormControl isInvalid={Boolean(errors?.password?.message)}>
                  <FormControl.Label marginLeft={3}>Senha</FormControl.Label>
                  <Input
                    w="100%"
                    mx="3"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Senha"
                    type={show ? 'text' : 'password'}
                    InputRightElement={
                      <Pressable
                        onPress={() => {
                          setShow(!show);
                        }}
                      >
                        <Icon
                          as={
                            <MaterialIcons
                              name={show ? 'visibility' : 'visibility-off'}
                            />
                          }
                          size={5}
                          mr="2"
                          color="muted.400"
                        />
                      </Pressable>
                    }
                  />
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}
                  >
                    {errors?.password?.message}
                  </FormControl.ErrorMessage>
                </FormControl>
              )}
              name="password"
            />
          </View>
          <Button
            isLoading={isLoading}
            w={200}
            bg="#006AFF"
            onPress={handleSubmit(onSubmit)}
          >
            Criar conta
          </Button>
          <Button
            variant="ghost"
            w={200}
            bg="#fff"
            onPress={() => navigation.navigate('Login')}
          >
            Já tenho conta
          </Button>
        </Wrapper>
      </Form>
    </Container>
  );
}

export { RegisterScreen };
