import { api } from '../api';
import { TasksData, TasksDataResponse } from './types';

export const PostCreateTasks = async (data: TasksData) => {
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

export const PutFinishTask = async (
  id: number,
  data: TasksData
): Promise<void> => {
  try {
    await api.put(`/tasks/${id}`, {
      description: data.description,
      hour: data.hour,
      date: data.date,
      tag: data.tag,
      finish: data.finish,
    });
  } catch (err) {
    console.log(err);
  }
};
