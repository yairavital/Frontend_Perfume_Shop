import { usersType } from './usersType';

export interface Iuser {
  id: string;
  name: string;
  email: string;
  password: string;

  type: usersType;
}
