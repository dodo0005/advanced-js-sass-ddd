# Domain-Driven Design (DDD) Specifications

## 1. Value Objects (Branded Types)
To enforce the "Parse, Don't Validate" principle, we use TypeScript Branded Types and Smart Constructors. This ensures that invalid data cannot even enter our domain.
* **StudentId**: Must follow the `STU-XXX` format.
* **CourseCode**: 2–4 letters followed by 3 digits (e.g., `CS101`).
* **Email**: Must be a valid email string format.
* **Credits**: Strictly limited to the values: `1, 2, 3, 4, 6`.
* **Semester**: Must match the format `(Fall|Spring|Summer)YYYY`.
* **EnrollmentId**: `ENR-` prefix followed by a unique identifier.

## 2. Entities
Entities represent the core business objects and enforce our domain invariants.
* **Student**: Represents a university student. Tracks enrolled credits and ensures they never exceed the active semester limit.
* **Course**: Represents a university course. Tracks the number of enrolled students and enforces a strict capacity limit (1-200 seats).
* **Enrollment**: Links a `Student` to a `Course` for a specific `Semester`.

## 3. Business Rules & Invariants
1. **Capacity Rule**: A course cannot accept enrollments beyond its defined capacity. Attempting to do so throws a domain error and triggers a `CourseFull` event.
2. **Credit Limit Rule**: A student cannot enroll in more than 18 credits per semester.
3. **Uniqueness Rule**: A student cannot enroll in the exact same course twice in the same semester (handled by the Enrollment entity).
4. **Type Safety Rule**: No raw strings or numbers (`any`) are used for domain properties; everything must pass through a Smart Constructor first.

## 4. Domain Events & Observer Pattern
The system uses an Event Dispatcher (Observer Pattern) to decouple side effects from the core entity logic. 
* **CourseFullEvent**: Dispatched when an enrollment attempt hits the exact course capacity limit. Carries the `courseCode` and `capacity`.
* **CourseCapacityReachedEvent**: Dispatched when a course hits 80% capacity.
* **StudentEnrolledEvent**: Dispatched upon a successful enrollment.
* **EnrollmentCancelledEvent**: Dispatched when a student drops a course.