import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgFormTemplateFormComponent } from './template-form.component';

describe('NgFormTemplateFormComponent', () => {
  let component: NgFormTemplateFormComponent;
  let fixture: ComponentFixture<NgFormTemplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFormTemplateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFormTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
