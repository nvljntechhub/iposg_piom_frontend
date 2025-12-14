"use client";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { Inventory2, ProductionQuantityLimits } from "@mui/icons-material";
import { SidebarWrapper } from "./Style";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { ROUTES_URL } from "@/utils/properties";

export default function Sidebar() {
  const theme = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  const open = useSelector((state: RootState) => state.sidebar.open);

  const isProductActive = pathname.startsWith(ROUTES_URL.PRODUCTS);
  const isOrdersActive = pathname.startsWith(ROUTES_URL.ORDERS);

  return (
    <div>
      <SidebarWrapper
        sx={{
          display: open ? "inline-block" : "none",
          background: theme.sidebar.background,
        }}
      >
        <List>
          <ListItem>
            <ListItemButton
              selected={isProductActive}
              onClick={() => router.push(ROUTES_URL.PRODUCTS)}
            >
              <ListItemIcon>
                <ProductionQuantityLimits
                  color={isProductActive ? "primary" : "inherit"}
                />
              </ListItemIcon>
              <ListItemText primary="Product" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              selected={isOrdersActive}
              onClick={() => router.push(ROUTES_URL.ORDERS)}
            >
              <ListItemIcon>
                <Inventory2 color={isOrdersActive ? "primary" : "inherit"} />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItemButton>
          </ListItem>
        </List>
      </SidebarWrapper>
    </div>
  );
}
