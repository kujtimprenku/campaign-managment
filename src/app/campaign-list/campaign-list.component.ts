import { Component, OnInit } from '@angular/core';
import {Campaign} from '../models/campaign.model';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {

  campaign: Campaign[];

  constructor() { }

  ngOnInit() {
  }

}
