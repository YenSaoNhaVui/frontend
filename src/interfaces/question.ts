export interface Question {
  id: number;
  createdAt: Date | string;
  name: string;
  identity: string;
  details: string;
  viewed: boolean;
}
