import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-kappa',
  templateUrl: './kappa.component.html',
  styleUrls: ['./kappa.component.css']
})
export class KappaComponent implements OnInit {
  numbersKappa: number[] = [];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.numbersKappa = this._dataService.retrieveNumbersKappa();
  }
  pushThree() {
    this._dataService.calculate();
    this.numbersKappa = this._dataService.retrieveNumbersKappa();
  }

}
