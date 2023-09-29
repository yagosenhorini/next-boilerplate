import { ReactNode } from 'react';

export type IForm = {
  children: ReactNode;
  handleSubmit: () => void;
};
