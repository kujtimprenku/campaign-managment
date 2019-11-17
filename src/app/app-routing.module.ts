import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CampaignListComponent} from './campaign-list/campaign-list.component';
import {CampaignCreateComponent} from './campaign-create/campaign-create.component';

const routes: Routes = [
  {path: '', component: CampaignListComponent},
  {path: 'create', component: CampaignCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
