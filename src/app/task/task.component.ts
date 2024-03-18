import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITask } from '../task';
import {
  NgIf,
  NgFor,
  DatePipe,
} from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ 
    NgIf,
    NgFor,
    DatePipe,
    CommonModule
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
}
