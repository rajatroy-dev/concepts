import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprehensionComponent } from './apprehension.component';

describe('ApprehensionComponent', () => {
  let component: ApprehensionComponent;
  let fixture: ComponentFixture<ApprehensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprehensionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprehensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
