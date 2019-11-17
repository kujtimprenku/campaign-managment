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
  totalPagesArray: number[];
  totalPages;
  limit = 3;
  currentPage = 1;

  // pageSizeOptions = [1, 2, 5, 10];

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
}
