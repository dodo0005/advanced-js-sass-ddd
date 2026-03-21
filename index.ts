import { domainEventDispatcher } from './observer/EventDispatcher';
import { IObserver } from './observer/IObserver';
import { CourseFullEvent } from './events/CourseFullEvent';

import { Student } from './entities/Student';
import { Course } from './entities/Course';


import { createStudentId } from './value-objects/student_id';
import { createCourseCode } from './value-objects/coursecode';
import { createEmail } from './value-objects/email';
import { createCredits } from './value-objects/credits';

class CourseFullLogger implements IObserver<CourseFullEvent> {
  handle(event: CourseFullEvent): void {
    console.log(`\n[DOMAIN EVENT TRIGGERED]: ${event.eventName} on ${event.occurredOn.toISOString()}`);
    console.log(`   -> Course ${event.courseCode} has reached its max capacity of ${event.capacity} seats.\n`);
  }
}

domainEventDispatcher.subscribe('CourseFull', new CourseFullLogger());

function unwrap<T>(result: T | Error): T {
  if (result instanceof Error) {
    throw result;
  }
  return result;
}

try {

  const student1Id = unwrap(createStudentId('STU-001'));
  const student1Email = unwrap(createEmail('alice@epita.fr'));
  
  const student2Id = unwrap(createStudentId('STU-002'));
  const student2Email = unwrap(createEmail('bob@epita.fr'));

  const student3Id = unwrap(createStudentId('STU-003'));
  const student3Email = unwrap(createEmail('charlie@epita.fr'));

  const courseCode = unwrap(createCourseCode('CS101'));
  const courseCredits = unwrap(createCredits(3));

  const advancedJsCourse = new Course(courseCode, 'Advanced JavaScript', courseCredits, 2);

  console.log(`--- Created Course: ${advancedJsCourse.name} (Seat Limit: ${advancedJsCourse.capacity}) ---\n`);

  const initialCredits = unwrap(createCredits(1));

  const student1 = new Student(student1Id, 'Alice', student1Email, initialCredits);
  const student2 = new Student(student2Id, 'Bob', student2Email, initialCredits);
  const student3 = new Student(student3Id, 'Charlie', student3Email, initialCredits);

  console.log(`Attempting to enroll ${student1.name}...`);
  advancedJsCourse.enrollStudent();
  console.log(`Success: ${student1.name} enrolled.\n`);

  console.log(`Attempting to enroll ${student2.name}...`);
  advancedJsCourse.enrollStudent();
  console.log(`Success: ${student2.name} enrolled.\n`);

  console.log(`Attempting to enroll ${student3.name}...`);
  advancedJsCourse.enrollStudent();

} catch (error: any) {
  console.error(`[BUSINESS RULE ERROR]: ${error}`);
}