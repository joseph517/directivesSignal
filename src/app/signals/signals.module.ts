import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { SignalLayoutComponent } from './layout/signal-layout/signal-layout.component';


@NgModule({
  declarations: [
    UserInfoPageComponent,
    PropertiesPageComponent,
    CounterPageComponent,
    SignalLayoutComponent
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule
  ]
})
export class SignalsModule { }
