export interface OrderDetailType {
  id: string;
  product: string;
  plan: string;
  package: string;
  print_side: number;
  print_corner: string;
  amount: number;
  price: number;
  file_url: string;
  link_url: string;
  sender_email: string;
  recipient_name: string;
  recipient_email: string;
  recipient_phone: string;
  address_city: string;
  zipcode: string;
  address_full: string;
  send_option: string;
  payment_method: string;
  createdAt: string;
  updatedAt: string;
}
