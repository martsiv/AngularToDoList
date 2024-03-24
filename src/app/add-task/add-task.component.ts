import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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
    name: ['', [Validators.required, Validators.minLength(4)]],
    isChecked: [false],
    isImportant: [false, Validators.required],
    expirationDate: [new Date(), Validators.required]
  });

  @Output()
    createEvent = new EventEmitter<ITask>();

  onSubmit(): void {
    if (!this.taskForm.valid) {
      alert("Invalid data!");
      return;
    }
    
    this.createEvent.emit(this.taskForm.value as ITask);
  }
}
