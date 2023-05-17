import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { Images } from "../../constans/images";
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  public fileName = 'myBuy.xlsx';
  public images = Images;
  public itemsInCar: any[] = [];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {


    this.transformObject();
  }

  transformObject = () => {
    let paramsUrl: any[] = [];
    this.route.params.subscribe(
      param => paramsUrl = JSON.parse(param["items"])
    );


    const objetosUnicos = paramsUrl.reduce((contador, objeto) => {
      if (contador[objeto.id]) {
        contador[objeto.id].cantidad++;
      } else {
        contador[objeto.id] = {
          ...objeto,
          cantidad: 1
        };
      }
      return contador;
    }, []);


      let temp:any[] = []
      objetosUnicos.map((item:any)=>{
        temp.push(item);
      })

      this.itemsInCar = temp;

  }

  deleteItem = (id:number) => {

    this.itemsInCar.filter((item , index) =>{
      this.itemsInCar[index].cantidad = item.id == id ? this.itemsInCar[index].cantidad - 1 : this.itemsInCar[index].cantidad;

      if (this.itemsInCar[index].cantidad  === 0) {
        this.itemsInCar.splice(index , 1);
      }


    })




  }

  excelReport=() =>{
     /* pass here the table id */
     let element = document.getElementById('excel-table');
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

     /* save to file */
     XLSX.writeFile(wb, this.fileName);

  }


}


