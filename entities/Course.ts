import { CourseCode } from "../value-objects/coursecode"
import { Credits } from "../value-objects/credits"

// IMPORTANT: Import your event dispatcher and the event
import { domainEventDispatcher } from "../observer/EventDispatcher"
import { CourseFullEvent } from "../events/CourseFullEvent"

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
    // 1. Check if it's already full
    if (this.enrolledCount >= this.capacity) {
      // EMIT YOUR DOMAIN EVENT HERE BEFORE THROWING THE ERROR!
      domainEventDispatcher.emit(new CourseFullEvent(this.code, this.capacity));
      throw new Error("Course full");
    }

    // 2. Increment the count
    this.enrolledCount++;
  }

  is80PercentFull() {
    return this.enrolledCount / this.capacity >= 0.8;
  }

  isFull() {
    return this.enrolledCount === this.capacity;
  }
}