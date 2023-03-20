export type FormTypeStep<T extends string> = Record<T, string>;
export type FieldNameTypes<T> = T[keyof T];

export type UserType = {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  phone: string;
};
