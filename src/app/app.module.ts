import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { OrderBookChartComponent } from './order-book-chart/order-book-chart.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from 'primeng/shared';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ChartModule } from 'primeng/chart';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    OrderBookChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // BrowserAnimationsModule,
    SharedModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    DialogModule,
    ChartModule,
    AppRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
