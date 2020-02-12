
import { BaseTable } from './../common/base-table';
import { Component, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-news-table',
  templateUrl: './news-table.component.html',
  styleUrls: ['./news-table.component.css']
})
export class NewsTableComponent extends BaseTable implements OnInit {

  constructor() { 
    super(new EventEmitter());
  }

  ngOnInit() {
  }

}
