import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { ProductComponent } from '../products/components/product/product.component';
/*
import { BrowserModule } from '@angular/platform-browser';
*/

@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    ProductComponent,
  ],
  imports: [CommonModule, RouterModule, HttpClientModule, FormsModule],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    ProductComponent,
  ],
})
export class SharedModule {}
