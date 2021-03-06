import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IcdProductListComponent } from './icd-product-list/icd-product-list.component';
import { IcdProductCardComponent } from './icd-product-card/icd-product-card.component';
import { IcdHeaderComponent } from './icd-header/icd-header.component';

@NgModule({
  declarations: [
    AppComponent,
    IcdProductListComponent,
    IcdProductCardComponent,
    IcdHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

