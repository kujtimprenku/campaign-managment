import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-campaign-create',
  templateUrl: './campaign-create.component.html',
  styleUrls: ['./campaign-create.component.css']
})
export class CampaignCreateComponent implements OnInit {
  createCampaignForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.createCampaignForm = this.fb.group({
      description: ['', Validators.required],
      value: ['', Validators.required],
      type: ['', Validators.required],
      noOfCoupons: ['', Validators.required],
      merchant: ['69930434-5dde-4f71-8c5a-7e3a0b850759', [Validators.required]],
      creationDate: [new Date(), Validators.required],
      expiryDate: [new Date(), Validators.required],
    });
  }

  createCampaign() {
    if (this.createCampaignForm.invalid) {
      return;
    }
    const model = {
      ...this.createCampaignForm.value,
    };

    console.log(model);
    // Here we should make a call to API to create the campaign
  }
}
