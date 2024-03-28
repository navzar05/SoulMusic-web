import { Component } from '@angular/core';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {ProductsHeaderComponent} from "./components/products-header/products-header.component";
import {FiltersComponent} from "./components/filters/filters.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {ProductComponent} from "./components/product/product.component";
import {NgFor} from "@angular/common";
import {MatCard, MatCardContent, MatCardFooter, MatCardImage} from "@angular/material/card";
import {HeaderComponent} from "../../header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatDrawerContainer,
    MatDrawer,
    MatDrawerContent,
    MatGridListModule,
    NgFor,
    MatCard,
    MatCardContent,
    MatCardImage,
    MatCardFooter,
    ProductsHeaderComponent,
    FiltersComponent,
    ProductComponent,
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  columnsCount: number = 3;
  category: string | undefined;
  showDrawer : boolean = false;

  products: ProductComponent[] = [{
    id: 1,
    name: "salu1t",
    price: 2000
  },{
    id: 1,
    name: "salut",
    price: 3000
  },{
    id: 1,
    name: "sa2lut",
    price: 1000
  },{
    id: 1,
    name: "sa4lut",
    price: 1000
  },{
    id: 1,
    name: "sa6lut",
    price: 1000
  },{
    id: 1,
    name: "salu8t",
    price: 1000
  },{
    id: 1,
    name: "salut",
    price: 1000
  },{
    id: 1,
    name: "salut",
    price: 1000
  },{
    id: 1,
    name: "salut",
    price: 1000
  },{
    id: 1,
    name: "salut",
    price: 1000
  },{
    id: 1,
    name: "salut",
    price: 1000
  },{
    id: 1,
    name: "salut",
    price: 1000
  }];

  onColumnsChange(columnsCount: number): void{
    this.columnsCount = columnsCount;
  }

  onShowCategory(category: string): void {
    this.category = category;
  }

  onShowDrawerChange(newState: boolean): void{
    this.showDrawer = newState;
  }

}
