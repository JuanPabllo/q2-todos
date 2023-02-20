import { isToday, parseISO } from 'date-fns';
import { TasksDataResponse } from '../../services/tasks/types';

export const formatterDataFinished = (
  data: TasksDataResponse[]
): TasksDataResponse[] => {
  return data.filter((task) => task.finish === 'Finalizada');
};

export const formatterDataToday = (
  data: TasksDataResponse[]
): TasksDataResponse[] => {
  return data.filter(
    (task) => isToday(parseISO(String(task.date))) && task.finish === 'Pendente'
  );
};

export const formatterDataOthersDays = (
  data: TasksDataResponse[]
): TasksDataResponse[] => {
  return data.filter(
    (task) => !isToday(parseISO(String(task.date))) && task.finish === 'Pendente'
  );
};
