import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "@nx-demo-monorepo/data";

@Component({
  selector: 'nx-demo-monorepo-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent  implements OnInit {
  @Input() todos: Todo[] = [];

  constructor() {}

  ngOnInit() {}
}
