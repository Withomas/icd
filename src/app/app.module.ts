import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IcdProductListComponent } from './icd-product-list/icd-product-list.component';
<<<<<<< HEAD
import { ProductListDesignComponent } from './product-list-design/product-list-design.component';
=======
import { IcdProductCardComponent } from './icd-product-card/icd-product-card.component';
import { IcdHeaderComponent } from './icd-header/icd-header.component';
>>>>>>> c612847e916c39b563324a9fc506f846491e988a

@NgModule({
  declarations: [
    AppComponent,
    IcdProductListComponent,
<<<<<<< HEAD
    ProductListDesignComponent
=======
    IcdProductCardComponent,
    IcdHeaderComponent,
>>>>>>> c612847e916c39b563324a9fc506f846491e988a
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

