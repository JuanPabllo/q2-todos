import { Tag } from '../../services/tasks/types';

export type CardProps = {
  title: string;
  tag: Tag;
  id: number;
  date: Date;
  hour: Date;
  finish: boolean;
  onDeleteTask: (id: number) => Promise<void>;
  setId: (value: React.SetStateAction<number>) => void;
};
