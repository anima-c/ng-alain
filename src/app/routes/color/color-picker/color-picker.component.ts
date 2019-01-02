import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-color-color-picker',
  templateUrl: './color-picker.component.html',
})
export class ColorColorPickerComponent implements OnInit {
  color = '#000';

  constructor(private http: _HttpClient) {}

  ngOnInit() {}
}
