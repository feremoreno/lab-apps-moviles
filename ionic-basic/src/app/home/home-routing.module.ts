import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { ReceptorPage } from '../receptor/receptor.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'receptor',
    component: ReceptorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
