import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Category } from '../Models/Models';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  baseUrl ="http://localhost:7263/api/Shopping/";

  constructor(private http:HttpClient) { }

  getCategoryList()
  {
    let url = this.baseUrl+'GetCategoryList';
    return this.http.get<any[]>(url).pipe(
      map((categories)=>
      categories.map((category)=>{
        let mappedCategory: Category ={
          id : category.id,
          category: category.category,
          subCategory: category.subCategory
        };
        return mappedCategory;
      }))
   );
  }

  getProducts(category: string, subcategory: string, count: number)
  {
    return this.http.get<any[]>(this.baseUrl+'GetProducts',{
      params: new HttpParams()
      .set('category', category)
      .set('subcategory',subcategory)
      .set('count',count),
    });
  }

  getproduct(id : number){
    let url = this.baseUrl + 'GetProduct/' + id ;
    return this.http.get(url);
  }
}
