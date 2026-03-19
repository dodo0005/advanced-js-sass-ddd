import { CourseCode } from "../value-objects/coursecode"
import { Credits } from "../value-objects/credits"

export class Course {
  constructor(
    public code: CourseCode,
    public name: string,
    public credits: Credits,
    public capacity: number,
    public enrolledCount: number = 0
  ) {
    if (capacity < 1 || capacity > 200) {
      throw new Error("Invalid capacity")
    }
  }

  enrollStudent() {
    if (this.enrolledCount >= this.capacity) {
      throw new Error("Course full")
    }

    this.enrolledCount++
  }

  is80PercentFull() {
    return this.enrolledCount / this.capacity >= 0.8
  }

  isFull() {
    return this.enrolledCount === this.capacity
  }
}