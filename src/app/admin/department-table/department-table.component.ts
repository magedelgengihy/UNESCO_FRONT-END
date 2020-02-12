import { BaseTable } from './../common/base-table';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-department-table',
  templateUrl: './department-table.component.html',
  styleUrls: ['./department-table.component.css']
})
export class DepartmentTableComponent extends BaseTable implements OnInit {

  constructor() { 
    super(new EventEmitter());
  }

  ngOnInit() {
  }

}
