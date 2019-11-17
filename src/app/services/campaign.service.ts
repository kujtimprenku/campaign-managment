import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  apiUrl = environment.apiUrl;
  constructor(public http: HttpClient) { }

  getCampaigns(pageNumber: number, limit: number) {
    return this.http.get(this.apiUrl + 'couponCampaign?page=' + pageNumber + '&limit=' + limit);
  }
}
