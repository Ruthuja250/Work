
export interface SuggestedProduct {
   banerimage : string;
    category : Category;
    
}

export interface NavigationItem {
    category : string;
     subcategory :string[];
     
 }

 export interface Category {
    id : number;
    category : string;
    subCategory: string;
}

export interface Product {
    id: number;
    title:string;
    description: string;
    productCategory: Category;
    price: number;
    quantity: number;
    imageName: string;
}