import { Component, OnInit } from '@angular/core';
import { CustomersService } from './../../../core/services/customers.service';
import { Customer } from 'src/app/core/models/customer.model';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

   customers: Customer[] = [];
  // items = ['mijael', 'rodrigo', 'callejas'];

  // customers: Customer[] = [
  //   {
  //     id: '1',
  //     image: 'assets/images/camiseta.png',
  //     title: 'Camiseta',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   }
  // ];
  constructor(
    private customerService: CustomersService
  ) { }

  ngOnInit() {
    this.fetchCustomers();
  }

  clickCustomer(id: number) {
    console.log('customer');
    console.log(id);
  }

  fetchCustomers(){
    this.customerService.getAllCustomers()
    .subscribe(customers => {
      console.log(customers);
      this.customers = customers;
    });
  }
}
