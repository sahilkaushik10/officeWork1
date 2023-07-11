import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDataComponent } from './application-data.component';

describe('ApplicationDataComponent', () => {
  let component: ApplicationDataComponent;
  let fixture: ComponentFixture<ApplicationDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationDataComponent]
    });
    fixture = TestBed.createComponent(ApplicationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
