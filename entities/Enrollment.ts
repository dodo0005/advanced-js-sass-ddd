import { StudentId } from "../value-objects/student_id"
import { CourseId } from "../value-objects/courseId"

export class Enrollment {
  constructor(
    public readonly studentId: StudentId,
    public readonly courseId: CourseId,
    public readonly enrolledAt: Date = new Date()
  ) {}
}