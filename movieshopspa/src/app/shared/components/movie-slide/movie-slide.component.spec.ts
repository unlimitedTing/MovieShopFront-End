import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSlideComponent } from './movie-slide.component';

describe('MovieSlideComponent', () => {
  let component: MovieSlideComponent;
  let fixture: ComponentFixture<MovieSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
