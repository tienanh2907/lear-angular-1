import { Component, OnInit } from '@angular/core';
import { ITodo } from '../models/todo.model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  constructor() {}
  todos: ITodo[] = [
    {
      id: 1,
      title: 'Todo 1',
      completed: 1,
      isDelete: false,
    },
    {
      id: 2,
      title: 'Todo 2',
      completed: 2,
      isDelete: false,
    },
    {
      id: 3,
      title: 'Todo 3',
      completed: 3,
      isDelete: false,
    },
    {
      id: 4,
      title: 'Todo 4',
      // completed: ,
      isDelete: false,
    },
  ];

  open: boolean = false;

  ngOnInit(): void {}

  onChange() {
    this.open = !this.open;
  }
  trackFn(index: number, item: any): number {
    return item.id;
  }
}
