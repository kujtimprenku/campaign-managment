import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ConvertLengthToArray} from './pipes/convert-length-to-array.pipe';
import { HeaderComponent } from './header/header.component';
import { CampaignCreateComponent } from './campaign-create/campaign-create.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CampaignListComponent,
    ConvertLengthToArray,
    HeaderComponent,
    CampaignCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
