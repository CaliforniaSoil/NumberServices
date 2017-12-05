import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  numbersAlpha: number[] = [];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.numbersAlpha = this._dataService.retrieveNumbersAlpha();
  }
  pushOne() {
    this._dataService.addNumberAlpha();
    this.numbersAlpha = this._dataService.retrieveNumbersAlpha();
  }

}
