import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../app/components/components.module';
import { HomeComponent } from './home/home.component';
import { CarDetailComponent } from './car-detail/car-detail.component';



@NgModule({
  declarations: [
    HomeComponent,
    CarDetailComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class TemplatesModule { }
