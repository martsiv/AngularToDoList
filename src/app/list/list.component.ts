import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { IList } from '../list';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ TaskComponent ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  list: IList = {
    title: "",
    tasks: []
  }
}