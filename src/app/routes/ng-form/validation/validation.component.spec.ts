import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgFormValidationComponent } from './validation.component';

describe('NgFormValidationComponent', () => {
  let component: NgFormValidationComponent;
  let fixture: ComponentFixture<NgFormValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFormValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
