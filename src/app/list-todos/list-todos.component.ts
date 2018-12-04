import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [
    new Todo(1, 'Learn full stack', false, new Date()),
    new Todo(2, 'Learn swimming', false, new Date()),
    new Todo(3, 'Learn gyming', false, new Date())
    // {id : 1, description : "Learn Full stack"},
    // {id : 2, description : "Become expert at Data science"},
    // {id : 3, description : "Very good singer"}
  ]

  // todo = {
  //   id : 1,
  //   description: 'Learn'
  // }

  constructor() { }

  ngOnInit() {
  }

}
