export type TasksData = {
  description: string;
  hour: Date;
  date: Date;
};

export interface TasksDataResponse extends TasksData {
  id: number;
}
