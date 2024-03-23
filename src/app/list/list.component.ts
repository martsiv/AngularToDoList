import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { IList } from '../list';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [TaskComponent, MatIconModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  list: IList = {
    title: "",
    tasks: []
  }
  sortedUp: boolean | null = null;
  filtered: boolean | null = null;

  removeTask(id: number): void {
    let index = this.list.tasks.findIndex(x => x.id === id);

    if (index !== -1) {
      this.list.tasks.splice(index, 1);
    }
  }
  sortByDate() {
    let tmp = 1;
    if (this.sortedUp === null || this.sortedUp === false) {
      this.sortedUp = true;
      tmp = 1;
    } else {
      this.sortedUp = false;
      tmp = -1;
    }

    this.list.tasks.sort((x, y) => {
      if (x.expirationDate === null && y.expirationDate === null) {
        return 0;
      } else if (x.expirationDate === null) {
        return 1 * tmp;
      } else if (y.expirationDate === null) {
        return -1 * tmp;
      } else if (x.expirationDate === undefined && y.expirationDate === undefined) {
        return 0;
      } else if (x.expirationDate === undefined) {
        return 1 * tmp;
      } else if (y.expirationDate === undefined) {
        return -1 * tmp;
      } else {
        return (y.expirationDate.getTime() - x.expirationDate.getTime()) * tmp;
      }
    });
  }

  @Output() 
    filterEvent = new EventEmitter<boolean>();
  @Output()
    searchEvent = new EventEmitter<string>();

  filterTasks() {
    this.filtered = !this.filtered;
    this.filterEvent.emit(this.filtered);
  }
  searchTerm: string = "";
  searchByTitle() {
    this.searchEvent.emit(this.searchTerm);
  }
}