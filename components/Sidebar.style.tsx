import { Box, styled } from "@mui/material";

export const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        color: ${theme.colors.alpha.trueWhite[70]};
        position: fixed;
        z-index: 6;
        height: 100%;
        padding-bottom: 68px;
        top: 70px;
        left: 0px;
        transition: 'left 0.3s ease-in-out, margin-left 0.3s ease-in-out';
        background: ${theme.colors.alpha.trueWhite[100]};
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.08);
         @media (min-height: ${theme.breakpoints.values.lg}px) {
            top: ${theme.header.height};
            width: auto;
        }
`
);
