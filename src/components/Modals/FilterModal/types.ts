import { Finish, Tag } from '../../../services/tasks/types';

export type FilterModalProps = {
  showModal: boolean;
  setShowModal: (value: React.SetStateAction<boolean>) => void;
  tag: Tag | undefined;
  setTag: (value: React.SetStateAction<Tag | undefined>) => void;
  finish: string | undefined;
  setFinish: (value: React.SetStateAction<Finish | undefined>) => void;
};
