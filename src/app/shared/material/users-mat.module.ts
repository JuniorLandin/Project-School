import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs'
import { SharedModule } from '../shared.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  exports: [
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    SharedModule
  ],
  declarations: [],
  providers: [
    {
      provide: MAT_DATE_LOCALE, useValue: 'pt-br'
    }
  ]
})
export class UsersMaterialModule { }
