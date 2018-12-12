import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-validation',
  templateUrl: './temp-validation.component.html',
  styles: [],
})
export class TempValidationComponent implements OnInit {
  hero = new Hero(0, 'Dr IQ', 'Really Smart', 'Chuck Overstreet');

  constructor() {}

  ngOnInit() {}
}
