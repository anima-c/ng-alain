import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  FormArray,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-ng-form-reactive-forms',
  templateUrl: './reactive-forms.component.html',
})
export class NgFormReactiveFormsComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private http: _HttpClient, private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: [''],
      }),
      aliases: this.fb.array([this.fb.control('')]),
    });
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  ngOnInit() {}

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}
