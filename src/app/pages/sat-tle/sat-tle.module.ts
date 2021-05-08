import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SatTlePageRoutingModule } from './sat-tle-routing.module';

import { SatTlePage } from './sat-tle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SatTlePageRoutingModule
  ],
  declarations: [SatTlePage]
})
export class SatTlePageModule {}
