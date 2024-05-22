import { Injectable, signal } from "@angular/core";
import { BookModel } from "../app/models/BookModel";

@Injectable({
    providedIn: 'root'
}) export class CartService {
    cart = signal<BookModel[]>(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : []);
}