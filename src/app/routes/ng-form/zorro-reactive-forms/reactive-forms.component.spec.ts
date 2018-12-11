import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgFormReactiveFormsComponent } from './reactive-forms.component';

describe('NgFormReactiveFormsComponent', () => {
  let component: NgFormReactiveFormsComponent;
  let fixture: ComponentFixture<NgFormReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFormReactiveFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFormReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
