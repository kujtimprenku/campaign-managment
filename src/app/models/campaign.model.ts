export interface Campaign {
  id: string;
  description: string;
  value: number;
  type: string;
  noOfCoupons: number;
  merchant: {};
  creationDate: Date;
  expiryDate: Date;
}
