import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { z } from 'zod';

export const FormRegisterSchema = z.object({
  email: z.string().email({ message: 'Email inválido.' }),
  password: z
    .string()
    .min(8, { message: 'Sua senha deve ter no mínimo 8 caracters.' }),
});

export type FormRegisterSchemaType = z.infer<typeof FormRegisterSchema>;

export interface RegisterProps {
  navigation: NativeStackNavigationProp<any, any>;
}
