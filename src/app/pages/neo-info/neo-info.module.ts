import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeoInfoPageRoutingModule } from './neo-info-routing.module';

import { NeoInfoPage } from './neo-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeoInfoPageRoutingModule
  ],
  declarations: [NeoInfoPage]
})
export class NeoInfoPageModule {}
