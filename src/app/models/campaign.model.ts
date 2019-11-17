export interface Campaign {
  description: string;
  value: number;
  type: string;
  noOfCoupons: number;
  merchant: {};
  creationDate: Date;
  expiryDate: Date;
}
