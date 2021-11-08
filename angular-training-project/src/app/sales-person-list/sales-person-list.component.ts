import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {


  //kreiramo listu objekata
  salesPersonList: SalesPerson[] = [
    new SalesPerson('Sara', 'Petrovic', 'sara@gmail.com',100000),
    new SalesPerson('Marko', 'Lucic', 'marko@gmail.com',40000),
    new SalesPerson('Dragan', 'Petrovic', 'dragan@gmail.com',90000),
    new SalesPerson('Pera', 'Peric', 'pera@gmail.com',60000)

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
