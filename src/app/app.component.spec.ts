import { TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UnitTestService } from 'src/services/unit-test.service';
import { UniTest } from 'src/testing/UnitTest';
import { AppComponent } from './app.component';
import { User } from './user.model';


describe('AppComponent', () => {
  let fixture;
  let a;
  let app;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    a = new UniTest(app, 'App Component');
  });
  it('should be created1', () => {
    a.testTitleRendering('Angular-Testing-Specs');
  });
  it('formValid', () => {
    app.initForm();
    a.testFormStatus('testForm');
  });
  it('Form Valid After value set', () => {
    app.initForm();
    a.testFormAfterValue('testForm');
  });
  it('name invalid initially', () => {
    app.initForm();
    a.testFormControlForRequiredError('testForm', 'name');
  });
  it('name valid after value set', () => {
    app.initForm();
    a.testFormControlForRequiredErrorAfterValue('testForm', 'name');
  });
  it('check return type', () => {
    // app.initForm();
    // let user1: User;
    a.checkMethodReturnType('setUser', 'object');
  });
});
