import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDashboardHeaderComponent } from './task-dashboard-header.component';

describe('TaskDashboardHeaderComponent', () => {
  let component: TaskDashboardHeaderComponent;
  let fixture: ComponentFixture<TaskDashboardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDashboardHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskDashboardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
