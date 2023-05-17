import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";
import { Product, Image } from 'src/app/models/product.model';
import { Category } from 'src/app/models/category.model';
import { Images } from "../../constans/images";
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public images = Images;

  public product: Product[] = [];
  public imagesBanner: Image[] = [];
  public detail: Product = {
    id: 0,
    image: '',
    price: 0,
    rating: {
      rate: 0,
      count: 0
    },
    title: '',
    category: '',
    description: '',
  }
  public showDetail: boolean = false;
  public selectedProductsArray: Product[] = []
  public categories: Category[] = [];

  constructor(
    private service: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProductsArray();
    this.getCategoriesArray();
  }

  getProductsArray = () => {
    this.service.getAllProducts().subscribe((data: any) => {
      this.product = data;
      this.imagesBanner = this.transformDatatoBanner(data);
      console.log(this.product);
    },errorMsg =>{
      window.alert(errorMsg);
    }



    )
  }
  transformDatatoBanner = (data: Product[]) => {
    const tempArray: Image[] = [];

    data.forEach((element: any) => {
      tempArray.push(
        {
          path: element.image
        }
      )
    });
    return tempArray;
  }

  getCategoriesArray = () => {
    this.service.getAllCategories().subscribe((data: any) => {
      this.categories = data;
      console.log(this.categories);
    },errorMsg =>{
      window.alert(errorMsg);
    }
    )
  }


  setDetail = (id: number) => {
    this.detail = this.product.filter(item => item.id === id)[0];
    this.showDetail = true;
  }

  addCar = (product: Product) => {
    this.selectedProductsArray.push(product);

  }

  redirectToCar() {
    this.router.navigate(['/car-detail', JSON.stringify(this.selectedProductsArray)]);
  }

  filterByProduct(name: any) {

    console.log(name);
    const filtered = this.product
    if (name !== '') {
      let tempArrayFilter = filtered.filter(item => item.title.toLowerCase().includes(name.toLowerCase()));
      this.product = tempArrayFilter
    } else {
      this.getProductsArray();
    }
  }

  filterByCategory = (category:string) =>{

    if (category !== 'null') {
      this.service.getProductsByCategory(category).subscribe((data:any)=>{
        if (data.length > 0) {
          this.product = data;
        }
      })
    }else{
      this.getProductsArray();
    }

  }




}
