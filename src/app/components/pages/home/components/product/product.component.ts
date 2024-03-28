import { Component, Input} from '@angular/core';
import {MatCardImage, MatCardModule} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    MatCardModule,
    MatButton,
    MatDivider,
    MatIcon,
    CurrencyPipe,
    MatCardImage
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() id : number | undefined;
  @Input() name: string| undefined;
  @Input() price: number | undefined;
}
