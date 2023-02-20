import { api } from '../api';
import { GetTasksProps, TasksData, TasksDataResponse } from './types';

export const PostCreateTasks = async (data: TasksData) => {
  try {
    const { data: response } = await api.post('/tasks', data);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const GetTasks = async ({
  finish,
  tag,
}: GetTasksProps): Promise<TasksDataResponse[]> => {
  try {
    const { data: response } = await api.get('/tasks', {
      params: {
        tag: tag,
        finish: finish,
      },
    });
    return response;
  } catch (err) {
    console.log(err);

    return [];
  }
};

export const DeleteTasks = async (id: number): Promise<void> => {
  try {
    await api.delete(`/tasks/${id}`);
  } catch (err) {
    console.log(err);
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
