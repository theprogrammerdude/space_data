import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechTransferPageRoutingModule } from './tech-transfer-routing.module';

import { TechTransferPage } from './tech-transfer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechTransferPageRoutingModule
  ],
  declarations: [TechTransferPage]
})
export class TechTransferPageModule {}
