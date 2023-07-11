import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { LeaveFormComponent } from './leave-form.component';

describe('LeaveFormComponent', () => {
  let component: LeaveFormComponent;
  let fixture: ComponentFixture<LeaveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaveFormComponent]
    });
    fixture = TestBed.createComponent(LeaveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
