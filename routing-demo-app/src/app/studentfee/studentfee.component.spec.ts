import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentfeeComponent } from './studentfee.component';

describe('StudentfeeComponent', () => {
  let component: StudentfeeComponent;
  let fixture: ComponentFixture<StudentfeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentfeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentfeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
