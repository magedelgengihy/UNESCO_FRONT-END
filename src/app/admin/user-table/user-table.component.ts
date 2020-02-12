import { BaseTable } from './../common/base-table';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent extends BaseTable implements OnInit {

  constructor() { 
    super(new EventEmitter())
  }

  ngOnInit() {
  }

}
