import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { forbiddenNameValidator } from '../forbidden-name.directive';

@Component({
  selector: 'app-reactive-validation',
  templateUrl: './reactive-validation.component.html',
  styles: [],
})
export class ReactiveValidationComponent implements OnInit {
  heroForm: FormGroup;

  constructor() {
    this.heroForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i),
      ]),
      alterEgo: new FormControl(''),
      power: new FormControl(''),
    });
  }

  get name() {
    return this.heroForm.get('name');
  }

  get power() {
    return this.heroForm.get('power');
  }

  ngOnInit() {}
}
