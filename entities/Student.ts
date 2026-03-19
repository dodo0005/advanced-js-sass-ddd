import { StudentId } from "../value-objects/student_id"
import { Email } from "../value-objects/email"

export class Student {
  constructor(
    public readonly id: StudentId,
    public readonly email: Email
  ) {}
}