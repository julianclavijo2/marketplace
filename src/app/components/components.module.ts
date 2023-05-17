import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import {IvyCarouselModule} from 'angular-responsive-carousel';

import { ProductComponent } from './product/product.component';
import { BannerComponent } from './banner/banner.component';
import { FilterComponent } from './filter/filter.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';




@NgModule({
  declarations: [
    ProductComponent,
    BannerComponent,
    FilterComponent,
    ProductDetailComponent
  ],
  imports: [
    SlickCarouselModule,
    CommonModule,
    IvyCarouselModule,
    FormsModule

  ],
  exports: [
    FilterComponent,
    ProductComponent,
    ProductDetailComponent,
    BannerComponent
  ]

})
export class ComponentsModule { }
