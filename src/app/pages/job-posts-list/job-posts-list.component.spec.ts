import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostListComponent } from './job-posts-list.component';

describe('JobPostsListComponent', () => {
  let component: JobPostListComponent;
  let fixture: ComponentFixture<JobPostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobPostListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
