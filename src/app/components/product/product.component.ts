import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Images } from "../../constans/images";
import { Product } from "../../models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  public images = Images;

  @Input() product:Product = {
    id: 0,
    image: '',
    price: 0,
    rating: {
      rate:0,
      count:0
    },
    title: '',
    category: '',
    description: '',
  }

  @Output() eventDetail = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendAction =(idProd:number) =>{
    this.eventDetail.emit(idProd);


  }

}
