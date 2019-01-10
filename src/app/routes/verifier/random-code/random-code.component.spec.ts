import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VerifierRandomCodeComponent } from './random-code.component';

describe('VerifierRandomCodeComponent', () => {
  let component: VerifierRandomCodeComponent;
  let fixture: ComponentFixture<VerifierRandomCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifierRandomCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifierRandomCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
