import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersService } from './services/customers.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CustomersService
  ]
})
export class CoreModule { }
