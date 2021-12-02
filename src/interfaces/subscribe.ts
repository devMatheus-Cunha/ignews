export interface IUser {
  ref: {
      id: string;
  }
  data: {
      stripe_customer_id: string;
  }
}
