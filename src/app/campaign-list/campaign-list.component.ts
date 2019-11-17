import { Component, OnInit } from '@angular/core';
import {Campaign} from '../models/campaign.model';
import {CampaignService} from '../services/campaign.service';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {

  campaigns: Campaign[];

  constructor(private campaignService: CampaignService) { }

  ngOnInit() {
    this.getCampaigns();
  }

  getCampaigns() {
    this.campaignService.getCampaigns(1, 10).subscribe((response: {status, message, payload}) => {
      this.campaigns = response.payload.data;
      console.log(this.campaigns);
    });
  }

}
