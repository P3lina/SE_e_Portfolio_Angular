import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreenBackgroundDirective } from './directives/green-background.directive';
import { StringArrayToStringPipe } from './pipes/string-array-to-string.pipe';
import { OrderItemComponent } from './order-item/order-item.component';
import { XkcdCartoonComponent } from './xkcd-cartoon/xkcd-cartoon.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";
import { EurToDollarPipe } from './pipes/eur-to-dollar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GreenBackgroundDirective,
    StringArrayToStringPipe,
    OrderItemComponent,
    XkcdCartoonComponent,
    EurToDollarPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
