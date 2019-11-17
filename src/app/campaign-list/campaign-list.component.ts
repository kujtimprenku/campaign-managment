import {Component, OnInit} from '@angular/core';
import {Campaign} from '../models/campaign.model';
import {CampaignService} from '../services/campaign.service';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {

  campaigns: Campaign[];
  totalPages;
  limit = 3;
  currentPage = 1;

  constructor(private campaignService: CampaignService) {
  }

  ngOnInit() {
    this.getCampaigns(this.currentPage);
  }

  getCampaigns(currentPage: number) {
    this.currentPage = currentPage;
    this.campaignService.getCampaigns(this.currentPage, this.limit).subscribe((response: { status, message, payload }) => {
      this.campaigns = response.payload.data;
      this.totalPages = response.payload.totalElements / this.limit;
    });
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.getCampaigns(this.currentPage);
  }

  onDeleteCampaign(campaign: Campaign) {
    if (confirm('Are you sure to delete ' + campaign.description)) {
      this.campaignService.deleteCampaign(campaign.id).subscribe(() => {

      });
    }
  }
}
