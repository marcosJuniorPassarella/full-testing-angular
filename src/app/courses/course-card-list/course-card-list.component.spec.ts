import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCardListComponent } from './course-card-list.component';
import { CoursesModule } from '../courses.module';

describe('CourseCardListComponent', () => {
  let component: CourseCardListComponent;
  let fixture: ComponentFixture<CourseCardListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoursesModule],
      declarations: [CourseCardListComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CourseCardListComponent);
        component = fixture.componentInstance;
      });
  });

  it('should create the component', () => {
    pending();
  });

  it('should display the course list', () => {
    pending();
  });

  it('should display the first course', () => {
    pending();
  });
});
