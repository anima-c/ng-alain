import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorColorPickerComponent } from './color-picker.component';

describe('ColorColorPickerComponent', () => {
  let component: ColorColorPickerComponent;
  let fixture: ComponentFixture<ColorColorPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorColorPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
