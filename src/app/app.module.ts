import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeModule } from './pipe/pipe.module';
import { TestComponent } from './test/test.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
