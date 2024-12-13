import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductItemsComponent } from './product-items/product-items.component';
import { ItemComponent } from './item/item.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {path : '', redirectTo:'home' , pathMatch:'full'},
    {path : 'home' , component: HomeComponent},
    {path : 'products' , component: ProductsComponent},
    {path : 'search' , component: SearchComponent},
    {path : 'profile', component: ProfileComponent},
    {path : 'items', component: ProductItemsComponent},
    {path : 'item', component: ItemComponent},
    {path : 'cart', component: CartComponent}
];
