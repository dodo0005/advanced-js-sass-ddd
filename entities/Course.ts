import { CourseId } from "../value-objects/courseId"
import { StudentId } from "../value-objects/student_id"

export class Course {
  private students: StudentId[] = []

  constructor(
    public readonly id: CourseId,
    private capacity: number
  ) {}

  enroll(studentId: StudentId) {
    if (this.students.includes(studentId)) {
      throw new Error("Student already enrolled")
    }

    if (this.students.length >= this.capacity) {
      throw new Error("Course is full")
    }

    this.students.push(studentId)
  }

  getStudents() {
    return this.students
  }
}