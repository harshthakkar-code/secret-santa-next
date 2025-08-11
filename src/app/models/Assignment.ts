import { Employee } from "./Employee";

export class Assignment {
  constructor(
    public giver: Employee,
    public receiver: Employee
  ) {}
}
