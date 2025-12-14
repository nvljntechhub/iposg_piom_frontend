import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import Providers from "./providers";
import Header from "@/components/layouts/Header/Index";
import Sidebar from "@/components/layouts/Sidebar/Index";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import { OutletContainer } from "@/components/common/Index";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "IPOSG",
  description: "Inventory and Point of Sale System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Providers>
            <Header />
            <Sidebar />
            <OutletContainer>{children}</OutletContainer>
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
