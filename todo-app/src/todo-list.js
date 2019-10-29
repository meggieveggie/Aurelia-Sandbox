import { EventAggregator } from 'aurelia-event-aggregator';
import {Todo} from './todo';

export class TodoList {
  static inject = [EventAggregator]

  constructor(ea) {
    this.todos = [];
    this.filter = filters.all;
    ea.subscribe('todo:add', description => this.add(description));
  }

  invalidateView() {
    this.todosView = this.filter(this.todos);
  }

  activate(params) {
    this.filter = filters[params.filter] || filters.all;
    this.invalidateView();
  }

  add(description) {
    if (description) {
      this.todos.push(new Todo(this, description));
      this.invalidateView();
    }
  }

  remove(todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.invalidateView();
    }
  }
}

let filters = {
  all(todos) {
    return todos;
  },
  active(todos) {
    return todos.filter(x => !x.done );
  },
  completed(todos) {
    return todos.filter( x => x.done);
  }
};
