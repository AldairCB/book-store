import { Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    { path: 'search', component: SearchComponent },
    { path: 'cart', component: CartComponent },
];
