
import { BaseTable } from './../common/base-table';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photoalbum-table',
  templateUrl: './photoalbum-table.component.html',
  styleUrls: ['./photoalbum-table.component.css']
})
export class PhotoalbumTableComponent extends BaseTable implements OnInit {

  constructor() {
    super(new EventEmitter());
   }

  ngOnInit() {
  }

}
