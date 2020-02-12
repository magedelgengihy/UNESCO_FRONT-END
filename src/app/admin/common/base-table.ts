import { Input, Output, Component } from '@angular/core';

import { EventEmitter } from 'events';


export class BaseTable {
    @Input() data;
    @Output('deleteRecord') delete:EventEmitter;
    
    constructor( del){
        this.delete = del;
    }
    
    deleteRecord(id) {
        this.delete.emit(id);
    }
}