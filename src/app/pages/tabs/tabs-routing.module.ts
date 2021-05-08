import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'neo',
        pathMatch: 'full',
      },
      {
        path: 'neo',
        loadChildren: () =>
          import('../neo/neo.module').then((m) => m.NeoPageModule),
      },
      {
        path: 'tech-transfer',
        loadChildren: () =>
          import('../tech-transfer/tech-transfer.module').then(
            (m) => m.TechTransferPageModule
          ),
      },
      {
        path: 'tle',
        loadChildren: () =>
          import('../tle/tle.module').then((m) => m.TlePageModule),
      },
      {
        path: 'insight',
        loadChildren: () =>
          import('../insight/insight.module').then((m) => m.InsightPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
