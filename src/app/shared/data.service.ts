import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  deleteTodo(index: number) {
    throw new Error('Method not implemented.');
  }

  todos: Todo[] = [
    new Todo('This is a test!', true),
    new Todo('This is another test!', false),
  ];

  constructor() { }

  getAllTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(index: number, updateTodo: Todo) {
    this.todos[index] = updateTodo;
  }

  deleteTodoByIndex(index: number) {
    this.todos.splice(index, 1);
  }
}
