import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CampaignListComponent} from './campaign-list/campaign-list.component';

const routes: Routes = [
  {path: '', component: CampaignListComponent},
  // {path: 'create', component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
