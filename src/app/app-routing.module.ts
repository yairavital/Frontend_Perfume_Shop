import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './compomnets/about/about.component';
import { CartComponent } from './compomnets/cart/cart.component';
import { OrderConfirmComponent } from './compomnets/cart/order-confirm/order-confirm.component';
import { ContactUsComponent } from './compomnets/contact-us/contact-us.component';
import { HairCareComponent } from './compomnets/hair-care/hair-care.component';
import { LoginComponent } from './compomnets/login/login.component';
import { ManPerfumesComponent } from './compomnets/man-perfumes/man-perfumes.component';
import { MyHomeComponent } from './compomnets/my-home/my-home.component';
import { RegistrationComponent } from './compomnets/registration/registration.component';
import { WomenPerfumeComponent } from './compomnets/women-perfume/women-perfume.component';
import { OrderConfirmGuardService } from './order-confirm-guard.service';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminGuardService } from './editUsers-guard.service';
import { EditProductsComponent } from './manage-products/edit-products.component';
import { AddPerfumeComponent } from './add-perfume/add-perfume.component';
import { EditPerfumeComponent } from './edit-perfume/edit-perfume.component';

const routes: Routes = [
  { path: 'home', component: MyHomeComponent },
  { path: '', component: MyHomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'womenPerfume', component: WomenPerfumeComponent },
  { path: 'manPerfume', component: ManPerfumesComponent },
  { path: 'hairCare', component: HairCareComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'manageUsers',
    component: ManageUsersComponent,
    canActivate: [AdminGuardService],
  },
  {
    path: 'editUser',
    component: EditUserComponent,
    canActivate: [AdminGuardService],
  },
  {
    path: 'addUser',
    component: AddUserComponent,
    canActivate: [AdminGuardService],
  },
  {
    path: 'orderComplete',
    component: OrderConfirmComponent,
    canActivate: [OrderConfirmGuardService],
  },
  { path: 'registration', component: RegistrationComponent },
  {
    path: 'manageProducts',
    component: EditProductsComponent,
    canActivate: [AdminGuardService],
  },
  {
    path: 'addPerfume',
    component: AddPerfumeComponent,
    canActivate: [AdminGuardService],
  },
  {
    path: 'editPerfume',
    component: EditPerfumeComponent,
    canActivate: [AdminGuardService],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
