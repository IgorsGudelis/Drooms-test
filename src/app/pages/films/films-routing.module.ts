import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmDetailsComponent, FilmsComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: FilmsComponent,
  },
  {
    path: ':filmId',
    component: FilmDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmsRoutingModule {}
