import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  numbersBeta: number[] = [];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.numbersBeta = this._dataService.retrieveNumbersBeta();
  }
  pushTwo() {
    this._dataService.addNumberBeta();
    this.numbersBeta = this._dataService.retrieveNumbersBeta();
  }

}
