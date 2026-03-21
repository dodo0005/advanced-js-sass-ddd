import { DomainEvent } from './DomainEvent';

export class CourseFullEvent implements DomainEvent {
  public readonly eventName = 'CourseFull';
  public readonly occurredOn: Date;

  constructor(public readonly courseCode: string, public readonly capacity: number) {
    this.occurredOn = new Date();
  }
}