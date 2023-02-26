import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { TraintimeComponent } from './traintime/traintime.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { TicketComponent } from './ticket/ticket.component';
import { DisplayTicketComponent } from './display-ticket/display-ticket.component';
import { SpareComponent } from './spare/spare.component';


@NgModule({
  declarations: [
    BookingComponent,
    TraintimeComponent,
    PaymentComponent,
    ConfirmationComponent,
    TicketComponent,
    DisplayTicketComponent,
    SpareComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
