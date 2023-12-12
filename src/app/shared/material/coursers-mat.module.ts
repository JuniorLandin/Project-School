import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  exports: [
    MatIconModule, 
    MatButtonModule
  ],
  declarations: [],
  providers: [
    {
      provide: MAT_DATE_LOCALE, useValue: 'pt-br'
    }
  ]
})
export class CoursesMaterialModule { }
