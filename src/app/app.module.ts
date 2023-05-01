import { cartService } from './compomnets/cart/cart.service';
import { RouterModule } from '@angular/router';
import { cardsManService } from './compomnets/man-perfumes/cardsMan.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './compomnets/top-nav/top-nav.component';
import { FooterComponent } from './compomnets/footer/footer.component';
import {
  NgbAlertModule,
  NgbCarouselModule,
  NgbModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './compomnets/carousel/carousel.component';
import { ClockComponent } from './compomnets/clock/clock.component';
import { RandomPerfumeComponent } from './compomnets/random-perfume/random-perfume.component';
import { carouselDataService } from './compomnets/carousel/carouselData.service';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './compomnets/about/about.component';
import { PerfumesOnSaleComponent } from './compomnets/perfumesOnSale/perfumes-on-sale.component';
import { MyHomeComponent } from './compomnets/my-home/my-home.component';
import { WomenPerfumeComponent } from './compomnets/women-perfume/women-perfume.component';
import { cardsWomenService } from './compomnets/women-perfume/cardsWomen.service';
import { ManPerfumesComponent } from './compomnets/man-perfumes/man-perfumes.component';
import { ContactUsComponent } from './compomnets/contact-us/contact-us.component';
import { LoginComponent } from './compomnets/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { hairCareService } from './compomnets/hair-care/hair-care.service';
import { HairCareComponent } from './compomnets/hair-care/hair-care.component';
import { perfumesService } from './perfumes.service';
import { CartComponent } from './compomnets/cart/cart.component';
import { OrderConfirmComponent } from './compomnets/cart/order-confirm/order-confirm.component';
import { RegistrationComponent } from './compomnets/registration/registration.component';
import { ModalAddToChartComponent } from './modal-add-to-chart/modal-add-to-chart.component';
import { OrderDetailsService } from './order-details.service';
import { usersService } from './users.service';
import { OrderConfirmGuardService } from './order-confirm-guard.service';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminGuardService } from './editUsers-guard.service';
import { EditProductsComponent } from './manage-products/edit-products.component';
import { AddPerfumeComponent } from './add-perfume/add-perfume.component';
import { EditPerfumeComponent } from './edit-perfume/edit-perfume.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    FooterComponent,
    ClockComponent,
    AboutComponent,
    RandomPerfumeComponent,
    PerfumesOnSaleComponent,
    CarouselComponent,
    MyHomeComponent,
    WomenPerfumeComponent,
    ManPerfumesComponent,
    HairCareComponent,
    ContactUsComponent,
    LoginComponent,

    CartComponent,
    OrderConfirmComponent,
    RegistrationComponent,

    ModalAddToChartComponent,
    ManageUsersComponent,
    EditUserComponent,
    AddUserComponent,
    EditProductsComponent,
    AddPerfumeComponent,
    EditPerfumeComponent,
  ],
  providers: [
    carouselDataService,
    cardsWomenService,
    cardsManService,
    hairCareService,
    perfumesService,
    cartService,
    OrderDetailsService,
    usersService,
    OrderConfirmGuardService,
    AdminGuardService,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbCarouselModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
  ],
})
export class AppModule {}
