import { observable } from 'aurelia-framework';

export class Todo {
@observable done;

constructor(list, description) {
  this.list = list;
  this.description = description;
  this.done = false;
  this.editing = false;
}

doneChanged() {
  this.list.invalidateView();
}

remove() {
  this.list.remove(this);
}
}
