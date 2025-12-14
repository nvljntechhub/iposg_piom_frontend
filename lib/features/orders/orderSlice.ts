import { Order, OrderStatus } from "@/interfaces/order";
import ordersData from "@/services/orders.json";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrdersState {
  list: Order[];
}

const initialState: OrdersState = {
  list: ordersData as Order[],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder(state, action: PayloadAction<Order>) {
      state.list.push(action.payload);
    },
    updateOrderStatus(
      state,
      action: PayloadAction<{ id: string; status: OrderStatus }>
    ) {
      const order = state.list.find((item) => item.id === action.payload.id);
      if (order) {
        order.status = action.payload.status;
      }
    },
    removeOrder(state, action: PayloadAction<string>) {
      state.list = state.list.filter((order) => order.id !== action.payload);
    },
  },
});

export const { addOrder, updateOrderStatus, removeOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
