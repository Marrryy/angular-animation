import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedImgComponent } from './stacked-img.component';

describe('StackedImgComponent', () => {
  let component: StackedImgComponent;
  let fixture: ComponentFixture<StackedImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackedImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
