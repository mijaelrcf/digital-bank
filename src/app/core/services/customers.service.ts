import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/core/models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCustomers(){
    // return this.http.get<Customer[]>('http://platzi-store.herokuapp.com/products');
    return this.http.get<Customer[]>('http://localhost:22406/api/customers');
    // return this.http.get<Customer[]>('http://localhost/DigitalBank/api/customers');
  }

  // getCustomer(id: string){
  //   return this.http.get('http://platzi-store.herokuapp.com/products/${id}');
  // }

}
