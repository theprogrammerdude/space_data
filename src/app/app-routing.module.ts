import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  {
    path: 'neo-info/:id',
    loadChildren: () =>
      import('./pages/neo-info/neo-info.module').then(
        (m) => m.NeoInfoPageModule
      ),
  },
  {
    path: 'topic/:topic',
    loadChildren: () =>
      import('./pages/topic/topic.module').then((m) => m.TopicPageModule),
  },
  {
    path: 'sat-tle/:id',
    loadChildren: () =>
      import('./pages/sat-tle/sat-tle.module').then((m) => m.SatTlePageModule),
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./pages/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
