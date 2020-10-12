import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UniTest } from 'src/testing/UnitTest';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let testClass;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testClass = new UniTest(component, 'User');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('title check', () => {
    testClass.testTitleRendering('User');
  });
});
