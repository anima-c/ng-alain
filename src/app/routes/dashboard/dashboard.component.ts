import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
declare var AMap: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnInit {
  map: any;
  constructor(private http: _HttpClient) {}

  ngOnInit() {
    this.getMap();
  }

  getMap() {
    const map = new AMap.Map('AMapContainer', {
      resizeEnable: true,
      zoom: 0,
      // lang: 'zh_en',
    });
    this.map = map;
  }
}
