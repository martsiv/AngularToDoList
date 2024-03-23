import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';
import { IList } from './list';
import { TASKS } from './task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
searchFilter(title: string) {
  if (title == "") {
    this.list.tasks = TASKS;
  } else {
    this.list.tasks = TASKS.filter(x => x.name.toLowerCase().includes(title.toLowerCase()));
  }
}
filterTasks(isImportant: boolean) {
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
