import { useState } from "react";
import ModalHeader from "./ModalHeader";
import { UPDATE_MODAL_TYPE } from "@/utils/properties";
import { AvailabilityStatusEnum, UpdatingFieldsEnum } from "@/enum/products";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import NumberField from "./NumberField";
import { AvailabilityStatus } from "@/interfaces/products";
import { updateModalStyle } from "./Product.style";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (value: number | AvailabilityStatus) => void;
  field: UpdatingFieldsEnum;
  currentValue: number | AvailabilityStatus;
};

export default function UpdateProductModal(props: Props) {
  const { isOpen, onClose, onSubmit, field, currentValue } = props;
  const isStockUpdate = field === UpdatingFieldsEnum.Stock;
  const isStatusUpdate = field === UpdatingFieldsEnum.IsActive;
  const [currentStockValue, setCurrentStockValue] = useState(currentValue);
  const [currentAvailabilityStatus, setCurrentAvailabilityStatus] =
    useState<AvailabilityStatus>(
      field === UpdatingFieldsEnum.IsActive
        ? (currentValue as AvailabilityStatus)
        : AvailabilityStatusEnum.InStock
    );

  const availabilityStatuses = Object.values(AvailabilityStatusEnum);
  console.log("currentAvailabilityStatus", currentAvailabilityStatus);

  const handleSubmit = () => {
    console.log("currentStockValue", currentStockValue);

    onSubmit(
      isStockUpdate
        ? (currentStockValue as number)
        : (currentAvailabilityStatus as AvailabilityStatus)
    );
    onClose();
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={updateModalStyle}>
          <ModalHeader
            action="Update"
            module={UPDATE_MODAL_TYPE[field]}
            handleClose={onClose}
          />
          <Grid
            container
            alignItems="center"
            pt={3}
            sx={{ padding: "40px 10px 10px 40px" }}
          >
            <Grid size={10}>
              {isStockUpdate && (
                <NumberField
                  label="Stock"
                  min={0}
                  value={currentStockValue as number}
                  onValueChange={(value) =>
                    setCurrentStockValue(value as number)
                  }
                />
              )}
              {isStatusUpdate && (
                <>
                  <FormControl fullWidth component={Paper}>
                    <InputLabel id="demo-simple-select-label">
                      Availability Status
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={currentAvailabilityStatus}
                      label="Category"
                      onChange={(event: SelectChangeEvent) =>
                        setCurrentAvailabilityStatus(
                          event.target.value as AvailabilityStatus
                        )
                      }
                    >
                      {availabilityStatuses.map((availabilityStatus) => (
                        <MenuItem
                          key={availabilityStatus}
                          value={availabilityStatus}
                        >
                          {availabilityStatus}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </>
              )}
            </Grid>
            <Grid size={12}>
              <Grid container justifyContent="flex-end">
                <Button variant="contained" onClick={handleSubmit}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
