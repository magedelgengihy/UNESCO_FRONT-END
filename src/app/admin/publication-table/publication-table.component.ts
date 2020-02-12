import { BaseTable } from './../common/base-table';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-publication-table',
  templateUrl: './publication-table.component.html',
  styleUrls: ['./publication-table.component.css']
})
export class PublicationTableComponent extends BaseTable implements OnInit {

  constructor() { 
    super(new EventEmitter());
  }

  ngOnInit() {
  }

}
