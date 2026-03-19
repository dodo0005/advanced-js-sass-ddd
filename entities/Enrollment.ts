import { EnrollmentId } from "../value-objects/EnrollmentId"
import { StudentId } from "../value-objects/student_id"
import { CourseCode } from "../value-objects/coursecode"
import { Semester } from "../value-objects/semester"

export type EnrollmentStatus = "active" | "cancelled"

export class Enrollment {
  constructor(
    public id: EnrollmentId,
    public studentId: StudentId,
    public courseCode: CourseCode,
    public semester: Semester,
    public status: EnrollmentStatus = "active"
  ) {}

  cancel() {
    if (this.status !== "active") {
      throw new Error("Only active enrollments can be cancelled")
    }

    this.status = "cancelled"
  }
}