import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { z } from 'zod';

export const FormLoginSchema = z.object({
  email: z.string().email({ message: 'Email inválido.' }),
});

export type FormLoginSchemaType = z.infer<typeof FormLoginSchema>;

export interface LoginProps {
  navigation: NativeStackNavigationProp<any, any>;
}
