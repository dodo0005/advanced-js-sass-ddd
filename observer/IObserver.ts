import { DomainEvent } from '../events/DomainEvent';

export interface IObserver<T extends DomainEvent> {
  handle(event: T): void;
}