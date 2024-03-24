import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ITask } from '../task';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  constructor(private formBuilder: FormBuilder) {}
  
  // reactive form
  taskForm = this.formBuilder.group({
    id: [0],
    name: [''],
    isChecked: [false],
    isImportant: [false],
    expirationDate: [new Date()]
  });

  @Output()
    createEvent = new EventEmitter<ITask>();

  onSubmit(): void {
    this.createEvent.emit(this.taskForm.value as ITask);
  }
}
