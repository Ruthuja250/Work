import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Models/Models';
import { Title } from '@angular/platform-browser';
import { UtilityServiceService } from '../Services/utility-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input() view: 'grid'| 'list' |'currcartitem'|'prevcartitem' = 'grid'
@Input() product: Product = { 
  id : 0,
  title : '',
  description : '',
  price: 0,
  quantity : 0,
  productCategory : {
    id : 1,
    category : '',
    subCategory : '',
  },
  imageName: '',
};
  constructor( public utilityService: UtilityServiceService)  {}

  ngOnInit(): void {
    
  }

}
