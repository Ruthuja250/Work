import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Category, NavigationItem } from '../Models/Models';
import { NavigationService } from '../Services/navigation.service';
import { UtilityServiceService } from '../Services/utility-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
 cartItems: number =0;
navigationlist : NavigationItem[]=[];

constructor( private navigationService : NavigationService , public utilityService: UtilityServiceService){}
ngOnInit(): void {
  this.navigationService
  .getCategoryList()
  .subscribe((list : Category[]) => {
    for(let item of list)
    {
      let present =false;
      for(let navItem of this.navigationlist) {
        if(navItem.category===item.category){
          navItem.subcategory.push(item.subCategory);
          present = true;
        }
      }
      if(!present){
        this.navigationlist.push({
          category: item.category,
          subcategory:[item.subCategory],
        });
      }

    }
  }); 
  this.utilityService.changeCart.subscribe((res:any) =>{
    this.cartItems +=parseInt(res);
  });
}
}
