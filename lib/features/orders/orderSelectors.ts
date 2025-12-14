import { RootState } from "@/lib/store";

export const selectOrders = (state: RootState) => state.orders.list;

export const selectOrdersByStatus = (status: string) => (state: RootState) =>
  state.orders.list.filter((order) => order.status === status);
