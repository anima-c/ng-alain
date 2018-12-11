import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DragulaSampleComponent } from './sample.component';

describe('DragulaSampleComponent', () => {
  let component: DragulaSampleComponent;
  let fixture: ComponentFixture<DragulaSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragulaSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragulaSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
