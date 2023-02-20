export type Tag = 'Q2BANK' | 'Q2PAY' | 'Q2INGRESSOS';
export type Finish = 'Finalizada' | 'Pendente';

export type TasksData = {
  description: string;
  hour: Date;
  date: Date;
  tag: Tag;
  finish: Finish;
};

export interface TasksDataResponse extends TasksData {
  id: number;
}

export type GetTasksProps = {
  tag: Tag | undefined;
  finish: Finish | undefined;
};
