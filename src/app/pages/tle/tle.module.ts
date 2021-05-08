import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TlePageRoutingModule } from './tle-routing.module';

import { TlePage } from './tle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TlePageRoutingModule
  ],
  declarations: [TlePage]
})
export class TlePageModule {}
