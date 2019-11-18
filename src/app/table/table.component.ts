import { Component, OnInit } from '@angular/core';
import {TableShared} from '../table-shared';

@Component({
  selector: '[app-table]',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data: TableShared = [];
  isVisible: boolean = false;

  constructor() {
   this.data.row = 0;
    this.data.col = 0;
   }

  ngOnInit() {
    
  }

  createTable(): void {
    if (this.data.row === 0 && this.data.col === 0) {
      window.alert('Please enter the valid row and column');
    } else if (this.data.col === 0) {
       window.alert('Please enter the valid column');
    } else if (this.data.row === 0) {
      window.alert('Please enter the valid row');
    }
    else {
      this.isVisible = true;
    }
}

onChange(){
  
}

arrayGenerator(n: number): number[] {
    return Array.from(Array(n).keys());
  }
}