import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvGenerationComponent } from './cv-generation.component';

describe('CvGenerationComponent', () => {
  let component: CvGenerationComponent;
  let fixture: ComponentFixture<CvGenerationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvGenerationComponent]
    });
    fixture = TestBed.createComponent(CvGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
