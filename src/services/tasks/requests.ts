import { api } from '../api';
import { TasksData, TasksDataResponse } from './types';

export const postCreateTasks = async (data: TasksData) => {
  try {
    const { data: response } = await api.post('/tasks', data);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const GetTasks = async (): Promise<TasksDataResponse[]> => {
  try {
    const { data: response } = await api.get('/tasks');
    return response;
  } catch (err) {
    console.log(err);

    return [];
  }
};
