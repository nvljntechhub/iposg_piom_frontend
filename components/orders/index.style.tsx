import { OrderStatus } from "@/interfaces/order";
import { Circle } from "@mui/icons-material";
import { Chip } from "@mui/material";

const statusColorMap: Record<string, "success" | "warning" | "info" | "error"> =
  {
    Pending: "warning",
    Shipped: "info",
    Delivered: "success",
    Cancelled: "error",
  };

export const OrderStatusChip = (props: { status: OrderStatus }) => (
  <Chip
    icon={<Circle color={statusColorMap[props.status]} />}
    label={props.status}
  />
);
