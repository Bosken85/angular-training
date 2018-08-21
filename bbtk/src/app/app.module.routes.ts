import { Routes } from '@angular/router';
import { AboutResolver } from './pages/about/about-resolver';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

export const AppRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'shopping-cart', component: ShoppingCartComponent },
    { path: 'about', component: AboutComponent, resolve: { members: AboutResolver }},
    { path: 'contact', loadChildren: './modules/contact/contact.module#ContactModule' },
    { path: 'games', loadChildren: './modules/games/games.module#GamesModule' },
    { path: '**', component: HomeComponent }
];
