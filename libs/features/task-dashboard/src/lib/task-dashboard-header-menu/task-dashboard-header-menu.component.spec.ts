import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDashboardHeaderMenuComponent } from './task-dashboard-header-menu.component';

describe('TaskDashboardHeaderMenuComponent', () => {
  let component: TaskDashboardHeaderMenuComponent;
  let fixture: ComponentFixture<TaskDashboardHeaderMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDashboardHeaderMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskDashboardHeaderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
