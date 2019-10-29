import { EventAggregator } from 'aurelia-event-aggregator';

export class App {
  static inject = [EventAggregator]

  constructor(ea) {
    this.ea = ea;
    this.heading = 'Todos';
  }

  addTodo() {
    this.ea.publish('todo:add', this.description.value);
    this.description.value = '';
  }

  configureRouter(config) {
    config.map([
      { route: '', redirect: 'todos/all' },
      { route: 'todos/:filter', moduleId: 'todo-list'}
    ]);
  }
}
