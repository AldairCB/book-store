import { Component, Input, TemplateRef, inject } from '@angular/core';
import { BookModel } from '../../models/BookModel';
import { ToastService } from '../../../services/toast-service';
import { ToastsContainer } from './toasts-container';
import { CartService } from '../../../services/CartService';

@Component({
  selector: 'app-book-result',
  standalone: true,
  imports: [ToastsContainer],
  templateUrl: './book-result.component.html',
  styleUrl: './book-result.component.css',
})
export class BookResultComponent {
  @Input() book!: BookModel;

  toastService = inject(ToastService);
  cartService = inject(CartService)

  addToCart(book: BookModel, template: TemplateRef<any>) {
    this.cartService.cart.update((current) => [...current, book]);
    localStorage.setItem('cart', JSON.stringify(this.cartService.cart()));
    console.log(this.cartService.cart())
    this.showSuccess(template);
    // throw new Error('Method not implemented.');
  }
  showSuccess(template: TemplateRef<any>) {
    this.toastService.show({
      template,
      classname: 'bg-success text-light',
      delay: 5 * 1000,
    });
  }
}
