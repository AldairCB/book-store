import { Component, TemplateRef, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
import { BookModel } from '../../models/BookModel';
import { BookResultComponent } from '../book-result/book-result.component';
import { NgFor, NgIf } from '@angular/common';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastsContainer } from "../book-result/toasts-container";
import { CartService } from '../../../services/CartService';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-search',
    standalone: true,
    templateUrl: './search.component.html',
    styleUrl: './search.component.css',
    imports: [
        ReactiveFormsModule,
        BookResultComponent,
        NgFor,
        NgIf,
        NgbToastModule,
        ToastsContainer,
        RouterLink
    ]
})
export class SearchComponent {
  formBuilder = inject(FormBuilder);
  cartService = inject(CartService)
  router = inject(Router);

  form = this.formBuilder.nonNullable.group({
    keyword: ['', Validators.required],
  });

  //9786124461088
  searchResults: BookModel[] = [];

  showAlert = false;
  autohide = true;
  alertMessage = '';

  async search() {
    if (this.form.getRawValue().keyword.length < 3) {
      this.alertMessage = 'Please enter at least 3 characters';
      this.showAlert = true;
      return;
    }
    await axios
      .post('https://apitest.pruebasgt.com/api/products', {
        search: this.form.getRawValue().keyword,
      })
      .then((response) => {
        this.searchResults = response.data.data;
      });
  }
}
