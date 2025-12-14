import { AvailabilityStatusEnum } from "@/enum/products";
import { Circle } from "@mui/icons-material";
import { Card, Chip } from "@mui/material";
import { ReactNode } from "react";

export const AvailabilityChip = (props: {
  availabilityStatus: AvailabilityStatusEnum;
  onClick?: () => void;
}) => (
  <Chip
    icon={
      <Circle
        color={
          props.availabilityStatus === AvailabilityStatusEnum.InStock
            ? "success"
            : props.availabilityStatus === AvailabilityStatusEnum.LowStock
            ? "info"
            : "error"
        }
      />
    }
    label={props.availabilityStatus}
    onClick={props.onClick}
  />
);

export const updateModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  minHeight: 200,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "8px",
};

export const StyledProductDetailsCard = (props: { children: ReactNode }) => (
  <Card sx={{ padding: 3 }} {...props} />
);
