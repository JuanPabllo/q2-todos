import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { z } from 'zod';

export const FormLoginSchema = z.object({
  email: z.string().email({ message: 'Email inválido.' }),
  password: z
    .string()
    .min(8, { message: 'Sua senha deve ter no mínimo 8 caracters.' }),
});

export type FormLoginSchemaType = z.infer<typeof FormLoginSchema>;

export interface LoginProps {
  navigation: NativeStackNavigationProp<any, any>;
}
