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
  selector: 'app-ng-form-zorro-reactive-forms',
  templateUrl: './reactive-forms.component.html',
})
export class NgFormZorroReactiveFormsComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: [''],
    lastName: ['', [Validators.required]],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([this.fb.control('')]),
    items: this.fb.array([]),
  });

  itemD = this.fb.group({
    item1: [''],
    item2: [''],
  });

  constructor(private http: _HttpClient, private fb: FormBuilder) {}

  ngOnInit() {
    this.addItems();
  }

  onSubmit() {
    console.log('profileform - value ---- ', this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  get items() {
    return this.profileForm.get('items') as FormArray;
  }

  addItems() {
    this.items.push(this.itemD);
  }
}
