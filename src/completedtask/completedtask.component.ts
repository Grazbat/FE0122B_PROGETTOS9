import { Component, OnInit } from '@angular/core';
import { Todo } from '../app/todos';
import * as ToDoFunction from '../app/task.service';
import { NewtaskComponent } from '../app/newtask/newtask.component';
@Component({
  selector: 'app-completedtask',
  templateUrl: './completedtask.component.html',
  styleUrls: ['./completedtask.component.scss']
})
export class CompletedtaskComponent implements OnInit {
  tasks!: Todo[];

  newTaskTitle: string | undefined;
  constructor() {
    ToDoFunction.get().then((todos) => (this.tasks = todos.filter(todo => todo.completed)));
   }

  ngOnInit(): void {
  }

}
