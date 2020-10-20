import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  testForm: FormGroup;
  title = 'Angular-Testing-Specs';
  constructor(private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.testForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
  }
  setUser(): User {
    const user: User = {
      name: 'vinay',
      email: 'test@gmail.com',
      mob: 9090909090
    };
    return user;
  }
}

export class VinayVerma {
  a;
  constructor() {
    let b;
    if (1 === 1) {
      this.a = 'b'?b.toString():'';
    }
  }

}
