import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeoPageRoutingModule } from './neo-routing.module';

import { NeoPage } from './neo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeoPageRoutingModule
  ],
  declarations: [NeoPage]
})
export class NeoPageModule {}
