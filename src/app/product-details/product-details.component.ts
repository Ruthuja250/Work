import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../Services/navigation.service';
import { Product } from '../Models/Models';
import { UtilityServiceService } from '../Services/utility-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
imageIndex : number = 1;
product !: Product;
constructor(
  private activatedRoute: ActivatedRoute,
  private navigationService: NavigationService,
  public utilityService: UtilityServiceService
){}
ngOnInit(): void {
  this.activatedRoute.queryParams.subscribe((params: any) =>{
    let id = params.id;
  this.navigationService.getproduct(id).subscribe((res:any)=>
  {
    this.product = res;
  });
  });
  
}
}
