import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-ng-form-validation',
  templateUrl: './validation.component.html',
})
export class NgFormValidationComponent implements OnInit {

  constructor(private http: _HttpClient) { }

  ngOnInit() { }

}
