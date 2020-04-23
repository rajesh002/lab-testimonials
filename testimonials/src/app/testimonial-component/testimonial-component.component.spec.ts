import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialComponentComponent } from './testimonial-component.component';

describe('TestimonialComponentComponent', () => {
  let component: TestimonialComponentComponent;
  let fixture: ComponentFixture<TestimonialComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
