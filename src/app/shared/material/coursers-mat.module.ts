import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  exports: [
    MatIconModule, 
    MatButtonModule,
    MatCardModule,
    MatDividerModule
  ],
  declarations: [],
  providers: [
    {
      provide: MAT_DATE_LOCALE, useValue: 'pt-br'
    }
  ]
})
export class CoursesMaterialModule { }
