import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';
import { IList } from './list';
import { ITask, TASKS } from './task';
import { AddTaskComponent } from "./add-task/add-task.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ListComponent, AddTaskComponent]
})
export class AppComponent {
addTask(newTask: ITask): void {
  newTask.id = this.list.tasks.length + 1;
  this.list.tasks.push(newTask);
}
searchFilter(title: string): void {
  if (title == "") {
    this.list.tasks = TASKS;
  } else {
    this.list.tasks = TASKS.filter(x => x.name.toLowerCase().includes(title.toLowerCase()));
  }
}
filterTasks(isImportant: boolean): void {
  if (isImportant === true){
    this.list.tasks = TASKS.filter(x => x.isImportant === true);
  } else {
    this.list.tasks = TASKS;
  }
}
  list: IList = {
    title: "My To Do List",
    tasks: [] = TASKS
  }
}
