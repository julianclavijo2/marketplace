import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { ProductService } from "../../services/product.service";
import { Product , Image } from 'src/app/models/product.model';

declare var $:any;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() images:Image[] = [];

  constructor(
  ) { }

  ngOnInit(): void {

}



}
