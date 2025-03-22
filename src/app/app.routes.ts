import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ProductMenuComponent } from './shared/product-menu/product-menu.component';
import { ContactComponent } from './contact/contact.component';
import { PromotionComponent } from './promotion/promotion.component';
export const routes: Routes = [
    {path: 'login', component:LoginComponent},
    {path:'about', component:AboutComponent},
    {path: '', component:HomeComponent},
    {path: 'blog', component:BlogComponent},
    {path:'product-menu', component:ProductMenuComponent},
    {path: 'contact', component:ContactComponent},
    {path:"promotion", component:PromotionComponent}



];
