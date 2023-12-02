import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/films',
  },
  {
    path: 'films',
    loadChildren: () => import('./pages/').then(m => m.FilmsModule),
  },
  {
    path: 'characters',
    loadChildren: () => import('./pages').then(m => m.CharactersModule),
  },
  {
    path: '**',
    redirectTo: '/films',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
