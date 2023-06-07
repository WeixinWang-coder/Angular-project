import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  inputTask = '';
  taskList: String[] = [];
  complete = false;
  position = -1;
  changeToInputStatus = false;
  positionList: boolean[] = [];
  constructor() {}
  addTask() {
    this.taskList.push(this.inputTask);
    this.positionList.push(false);
    this.inputTask = '';
  }
  deleteTask(index: number) {
    this.taskList.splice(index, 1);
    this.positionList.splice(index, 1);
    console.log(this.positionList);
  }
  sortByWord() {
    this.taskList.sort();
  }
  completeFunc(index: number) {
    this.positionList[index] = !this.positionList[index];
    console.log(this.taskList);
  }
  containsIndex(index: number) {
    return this.positionList[index];
  }
  changeToInput(index: number) {
    this.changeToInputStatus = !this.changeToInputStatus;
    this.position = index;
    console.log(index);
  }
}
