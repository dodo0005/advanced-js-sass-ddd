import { StudentId } from "../value-objects/student_id"
import { Email } from "../value-objects/email"
import { Credits } from "../value-objects/credits"

export class Student {
  constructor(
    public readonly id: StudentId,
    public name: string,
    public email: Email,
    public enrolledCredits: Credits
  ) {}

  addCredits(credits: number) {
    const total = (this.enrolledCredits as unknown as number) + credits

    if (total > 18) {
      throw new Error("Credit limit exceeded")
    }

    this.enrolledCredits = total as Credits
  }
}