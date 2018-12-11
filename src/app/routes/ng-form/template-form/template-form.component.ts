import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-ng-form-template-form',
  templateUrl: './template-form.component.html',
})
export class NgFormTemplateFormComponent implements OnInit {

  constructor(private http: _HttpClient) { }

  ngOnInit() { }

}
