import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgAnimation2Component } from './img-animation2.component';

describe('ImgAnimation2Component', () => {
  let component: ImgAnimation2Component;
  let fixture: ComponentFixture<ImgAnimation2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgAnimation2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgAnimation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
