import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.sum(12, 2);
  }

  sum(num1: number, num2: number): number {
    return num1 + num2;
  }
}
