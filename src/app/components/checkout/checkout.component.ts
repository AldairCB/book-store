import { Component, inject } from '@angular/core';
import axios from 'axios';
import { CartService } from '../../../services/CartService';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  cartService = inject(CartService);
  orderDetails = {}
  constructor() {
    this.generateOrder();
  }
  async generateOrder() {
    await axios
      .post('https://apitest.pruebasgt.com/api/order', {
        client_id: 1,
        details: this.cartService
          .cart()
          .map((book) => ({ product_id: book.id, quantity: 1 })),
      })
      .then((response) => {
        this.orderDetails = response.data;
        console.log(response.data);
      });
  }
}
