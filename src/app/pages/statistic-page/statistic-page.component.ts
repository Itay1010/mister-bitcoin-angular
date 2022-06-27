import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';

@Component({
  selector: 'statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {

  constructor() { }

  private _dataArray = [
    ['Average price', 'USD'],
    ['January', 11],
    ['February', 12],
    ['March', 15],
    ['April', 22],
    ['May', 10],
    ['June', 9],
    ['July', 15],
    ['August', 12],
    ['September', 3],
    ['October', 11],
    ['November', 19],
    ['December', 20],
  ]

  public lineChart: GoogleChartInterface = {
    chartType: GoogleChartType.LineChart,
    dataTable: this._dataArray,
    options: { 'title': 'Average price' },
  }
  ngOnInit(): void {
  }

}
