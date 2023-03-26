import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDashboardEntryComponent } from './task-dashboard-entry.component';

describe('TaskDashboardEntryComponent', () => {
  let component: TaskDashboardEntryComponent;
  let fixture: ComponentFixture<TaskDashboardEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDashboardEntryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskDashboardEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
