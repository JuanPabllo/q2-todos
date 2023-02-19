export type Tag = 'Q2BANK' | 'Q2PAY' | 'Q2INGRESSOS';

export type TasksData = {
  description: string;
  hour: Date;
  date: Date;
  tag: Tag;
  finish: boolean;
};

export interface TasksDataResponse extends TasksData {
  id: number;
}
