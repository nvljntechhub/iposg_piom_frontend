"use client";

import { ROUTES_URL } from "@/utils/properties";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(ROUTES_URL.PRODUCTS);
}
