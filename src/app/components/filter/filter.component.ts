import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Images } from 'src/app/constans/images';
import { Category  } from 'src/app/models/category.model';




@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  public images = Images;

  public categoryName:string = '';

  @Input() allCategories:Category[] = [];
  @Output() txtInput:any = new EventEmitter()
  @Output() txtSelect:any = new EventEmitter()
  constructor() { }

  ngOnInit(): void {

    console.log(this.allCategories);
  }

  getText = (txt:any) => {
    this.txtInput.emit(txt.target.value);
  }

  getCategory = () =>{
    this.txtSelect.emit(this.categoryName);
  }

}
