export type OrderStatus = "Pending" | "Shipped" | "Delivered" | "Cancelled";

export interface Order {
  id: string;
  productName: string;
  quantity: number;
  price: number;
  customer: string;
  status: OrderStatus;
  orderDate: string;
  shippingAddress: string;
}
