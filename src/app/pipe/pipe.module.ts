import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TitleCasePipe } from './title-case.pipe';
import { InsertSpacePipe } from './insert-space.pipe';

@NgModule({
  imports: [ CommonModule ],
  exports: [
    CommonModule,
    FormsModule,
    TitleCasePipe,
    InsertSpacePipe
  ],
  declarations: [ TitleCasePipe ]
})
export class PipeModule { }