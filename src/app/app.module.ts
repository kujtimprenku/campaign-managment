import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ConvertLengthToArray} from './pipes/convert-length-to-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CampaignListComponent,
    ConvertLengthToArray
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
