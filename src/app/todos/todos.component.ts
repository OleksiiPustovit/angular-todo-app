import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = []
  showValidationErrors: boolean = false;

  constructor(private dataService: DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }

  onFormSubmit(form: NgForm): void | boolean {

    if (form.invalid) {
      return this.showValidationErrors = true;
    }

    this.dataService.addTodo(new Todo(form.value.text, false));

    this.showValidationErrors = false;
    form.reset();
  }

  toogleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }

  editTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);

    let dialogRef = this.dialog.open(EditTodoDialogComponent, {
      width: '700px',
      data: todo
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataService.updateTodo(index, result)
      }
    });
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.dataService.deleteTodoByIndex(index);
  }

}
