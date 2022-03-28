import { Component, OnInit } from '@angular/core';
import { Todo } from '../todos';
import * as ToDoFunction from '../task.service';


@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.scss']
})
export class NewtaskComponent implements OnInit {
  task!: Todo[];

  newTaskTitle:string | undefined
  constructor() {
    ToDoFunction.get().then(todos=>this.task = todos.filter(todo=>!todo.completed))
  }

  ngOnInit(): void {
  }

async addTask() {
  const nTodo =  await ToDoFunction.add({title:this.newTaskTitle as string, completed:false})
  this.task.push(nTodo);
  this.newTaskTitle = ''
}

async completeTask( todo:Todo,i:number) {
  await ToDoFunction.update({completed:true}, todo.id)
  this.task.splice(i,1)
}


}



