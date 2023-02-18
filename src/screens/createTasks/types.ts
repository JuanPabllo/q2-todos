import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { z } from 'zod';

export const FormCreateTasksSchema = z.object({
  description: z.string(),
});

export type FormCreateTasksSchemaType = z.infer<typeof FormCreateTasksSchema>;

export interface CreateTasksProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export type ModePicker = 'date' | 'time';
