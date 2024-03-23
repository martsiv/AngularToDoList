import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule,
          NgIf,
          NgFor,
          DatePipe, } from '@angular/common';
import { ITask } from '../task';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ 
    NgIf,
    NgFor,
    DatePipe,
    CommonModule,
    MatIconModule
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input()
  task: ITask = {
    id: 0,
    name: "",
    isChecked: false,
    isImportant: false,
    expirationDate: new Date()
  }

  @Output()
  removeEvent = new EventEmitter<number>();

  setCheckedUnchecked() {
    this.task.isChecked = !this.task.isChecked;
  }

  removeTask() {
    this.removeEvent.emit(this.task.id);
  }
}
