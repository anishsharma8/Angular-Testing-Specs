import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UniTest } from 'src/testing/UnitTest';

import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let testClass;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testClass = new UniTest(component, 'Test');
  });
  it('title check', () => {
    testClass.testTitleRendering('Test component');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
