import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PaymentComponent } from './payment/payment.component';
import { TicketComponent } from './ticket/ticket.component';
import { TraintimeComponent } from './traintime/traintime.component';

const routes: Routes = [
  {
    path: 'home', component: BookingComponent 
  },
  {
    path:'traintime',component:TraintimeComponent
  },
  {
    path:'payment',component:PaymentComponent
  },
  {
    path:'confirmation', component:ConfirmationComponent
  },
  {
    path:'ticket', component:TicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
