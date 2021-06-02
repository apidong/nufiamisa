import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-loading',
  templateUrl: './table-loading.component.html',
  styleUrls: ['./table-loading.component.css']
})
export class TableLoadingComponent implements OnInit {
  @Input() items: number = 1; // decorate the property with @Input()
  public ulang = new Array();

  constructor() { }

  ngOnInit(): void {

    for (let index = 0; index < this.items; index++) {

      this.ulang.push(index)
    }
  }

}
