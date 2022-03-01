import { StateClient } from '../enums/state-client';
import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  state!: StateClient;
  tva = 20;
  id!: number;
  name!: string;
  totalCaHt!: number;
  comment!: string;
  email!: string;

  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
