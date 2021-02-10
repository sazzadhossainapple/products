import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Products } from './products';


@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http:HttpClient) { }
  fetchProductListFromRemote():Observable<any>{
    return this._http.get<any>("https://product-services-system.herokuapp.com/getproductList"); 
  }
  addProductToRemote(products:Products):Observable<any>{
    return this._http.post<any>("https://product-services-system.herokuapp.com/addproduct",products);
  }

  fetchProductByidFromRemote(id:number):Observable<any>{
    return this._http.get<any>("https://product-services-system.herokuapp.com/getproductbyid/"+id); 
  }

  updateProduct(id: number, value: any): Observable<Object> {
    return this._http.put("https://product-services-system.herokuapp.com/updateproduct/"+id, value);
  }
  deleteProduct(id:number):Observable<any>{
    return this._http.delete<any>("https://product-services-system.herokuapp.com/deleteproductbyid/"+id); 
  }
  

}
