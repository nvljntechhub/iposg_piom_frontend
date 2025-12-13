import { Box, Grid, IconButton, Typography, useTheme } from "@mui/material";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";

type Props = {
  action: string;
  module: string;
  handleClose: () => void;
};

const ModalHeader = (props: Props) => {
  const { action, module, handleClose } = props;
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.colors.alpha.pumpkinOrange[100],
        color: theme.colors.alpha.white[100],
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ p: 0.5 }}
      >
        <Grid>
          <IconButton disableRipple sx={{ cursor: "default" }}>
            <Typography
              id="modal-modal-title"
              fontSize={16}
              sx={{ color: "white" }}
            >
              {action} {module}
            </Typography>
          </IconButton>
        </Grid>
        <Grid>
          <IconButton aria-label="close" onClick={handleClose}>
            <CloseTwoToneIcon
              sx={{
                color: theme.colors.alpha.orange[100],
                background: theme.colors.alpha.white[100],
                borderRadius: 0.3,
              }}
            />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ModalHeader;
