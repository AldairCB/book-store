import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartService } from '../../../services/CartService';
import { BookModel } from '../../models/BookModel';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgIf],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
remove(_t6: BookModel) {
throw new Error('Method not implemented.');
}
  cartService = inject(CartService);
}
