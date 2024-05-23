import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartService } from '../../../services/CartService';
import { BookModel } from '../../models/BookModel';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
    cartService = inject(CartService);
    cartTotal = this.cartService.cart().reduce((acc:number, book:BookModel) => acc + (+book.price), 0);
    removeItem(book: BookModel) {
      this.cartService.cart.update((current) => current.filter((b) => b.id !== book.id));
      localStorage.setItem('cart', JSON.stringify(this.cartService.cart()));
      this.cartTotal = this.cartService.cart().reduce((acc:number, book:BookModel) => acc + (+book.price), 0);
    }
}
