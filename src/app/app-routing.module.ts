import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CampaignListComponent} from './campaign-list/campaign-list.component';

const routes: Routes = [
  {path: 'campaigns', component: CampaignListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
