import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'neo',
    pathMatch: 'full',
  },
  {
    path: 'neo',
    loadChildren: () =>
      import('./pages/neo/neo.module').then((m) => m.NeoPageModule),
  },
  {
    path: 'neo-info/:id',
    loadChildren: () =>
      import('./pages/neo-info/neo-info.module').then(
        (m) => m.NeoInfoPageModule
      ),
  },
  {
    path: 'tech-transfer',
    loadChildren: () =>
      import('./pages/tech-transfer/tech-transfer.module').then(
        (m) => m.TechTransferPageModule
      ),
  },
  {
    path: 'topic/:topic',
    loadChildren: () =>
      import('./pages/topic/topic.module').then((m) => m.TopicPageModule),
  },
  {
    path: 'tle',
    loadChildren: () =>
      import('./pages/tle/tle.module').then((m) => m.TlePageModule),
  },
  {
    path: 'sat-tle/:id',
    loadChildren: () =>
      import('./pages/sat-tle/sat-tle.module').then((m) => m.SatTlePageModule),
  },
  {
    path: 'insight',
    loadChildren: () => import('./pages/insight/insight.module').then( m => m.InsightPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
