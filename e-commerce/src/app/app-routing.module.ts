import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PageNotFoundComponent} from "./shared/page-not-found/page-not-found.component";
import {OrderComponent} from "./components/order/order.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {CategoryDetailsComponent} from "./components/category-details/category-details.component";
import {UserAuthGuard} from "./guards/user-auth.guard";
import {AdminAuthGuard} from "./guards/admin-auth.guard";
import {ApplicationErrorComponent} from "./shared/application-error/application-error.component";
import {ResourceNotFoundComponent} from "./shared/resource-not-found/resource-not-found.component";
import {ContactComponent} from "./components/contact/contact.component";


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'orders',
    component: OrderComponent,
    canActivate: [UserAuthGuard]

  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'products/:productId',
    component: ProductDetailsComponent
  },
  {
    path: 'categories/:id',
    component: CategoryDetailsComponent
  },
  {path: "notFoundResource/:status", component: ResourceNotFoundComponent},
  {path: "applicationError/:status", component: ApplicationErrorComponent},
  {
    path: 'admin', // this is the prefix route
    canActivate: [AdminAuthGuard],
    // lazy loading: this module will not loaded only if the the user navigate into it
    loadChildren: () => import('./admin/admin.module').then(a => a.AdminModule)
  },
  {
    path: '**', // unknown path
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
