import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { HomeComponent } from './home.component';
import { CoursesModule } from '../courses.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoursesModule, NoopAnimationsModule],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      });
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display only beginner courses', () => {
    pending();
  });

  it('should display only advanced courses', () => {
    pending();
  });

  it('should display both tabs', () => {
    pending();
  });

  it('should display advanced courses when tab clicked', () => {
    pending();
  });
});
