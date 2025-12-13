"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { Inventory2, ProductionQuantityLimits } from "@mui/icons-material";
import { SidebarWrapper } from "../Sidebar.style";

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <ProductionQuantityLimits />
            </ListItemIcon>
            <ListItemText
              primary="Product"
              sx={{ color: theme.colors.secondary.dark }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Inventory2 />
            </ListItemIcon>
            <ListItemText
              primary="Orders"
              sx={{ color: theme.colors.secondary.dark }}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <SidebarWrapper
        sx={{
          display: open ? "inline-block" : "none",
        }}
      >
        {DrawerList}
      </SidebarWrapper>
    </div>
  );
}
