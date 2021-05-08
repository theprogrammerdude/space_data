import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SatTlePage } from './sat-tle.page';

const routes: Routes = [
  {
    path: '',
    component: SatTlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SatTlePageRoutingModule {}
