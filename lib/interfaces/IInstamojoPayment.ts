export interface IInstamojoPayment {
  id: string;
  title: string;
  payment_type: string;
  payment_request: string | null;
  status: boolean;
  link: string;
  product: string | null;
  seller: string;
  currency: string;
  amount: string | number;
  name: string;
  email: string;
  phone: string;
  payout: string;
  fees: string | number;
  total_taxes: string | number;
  cases: [];
  affiliate_id: string | null;
  affiliate_commission: string;
  order_info: {
    shipping_address: string | null;
    shipping_city: string | null;
    shipping_state: string | null;
    shipping_zip: string | null;
    shipping_country: string | null;
    quantity: number;
    unit_price: string | number;
    custom_fields: Record<string, unknown>;
    variants: [];
  };
  instrument_type: string;
  billing_instrument: string;
  failure: string | null;
  created_at: Date | string;
  updated_at: Date | string;
  tax_invoice_id: string;
  resource_uri: string;
}
