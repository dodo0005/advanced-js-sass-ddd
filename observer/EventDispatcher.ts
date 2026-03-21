import { IObserver } from './IObserver';
import { DomainEvent } from '../events/DomainEvent';

export class EventDispatcher {
  private observers: Map<string, IObserver<any>[]> = new Map();

  subscribe<T extends DomainEvent>(eventName: string, observer: IObserver<T>): void {
    if (!this.observers.has(eventName)) {
      this.observers.set(eventName, []);
    }
    this.observers.get(eventName)!.push(observer);
  }

  emit(event: DomainEvent): void {
    const eventObservers = this.observers.get(event.eventName);
    if (eventObservers) {
      eventObservers.forEach(observer => observer.handle(event));
    }
  }
}

// Export a singleton instance so the whole app uses the same dispatcher
export const domainEventDispatcher = new EventDispatcher();