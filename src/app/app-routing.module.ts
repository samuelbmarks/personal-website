import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewHomeComponent } from './new-home/new-home.component';

const routes: Routes = [
  {
    path: '',
    component: NewHomeComponent
  },
  {
    path: 'hive',
    redirectTo: 'https://hivepersonaltraining.com',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
