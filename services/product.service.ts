import { AvailabilityStatus, Product } from "@/interfaces/products";
import { API_URLS } from "@/utils/properties";

const productBaseURL = API_URLS.BASE_URL + API_URLS.PRODUCTS;

export const fetchProductsAPI = async (
  limit: number,
  skip: number,
  searchTerm?: string,
  category?: string
) => {
  let url = "";

  if (category) {
    url =
      productBaseURL +
      API_URLS.CATEGORY +
      `/${category}?limit=${limit}&skip=${skip}`;
  } else if (searchTerm) {
    url =
      productBaseURL +
      API_URLS.SEARCH +
      `?q=${searchTerm}&limit=${limit}&skip=${skip}`;
  } else {
    url = productBaseURL + `?limit=${limit}&skip=${skip}`;
  }

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch products");

  const data = await res.json();

  if (category && searchTerm && data.products) {
    data.products = data.products.filter((p: Product) => {
      return p.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    data.total = data.products.length;
  }

  return data;
};

export const updateProductStockAPI = async (
  productId: number,
  stock: number
) => {
  const res = await fetch(productBaseURL + `/${productId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      stock,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to update stock");
  }

  return res.json();
};

export const updateProductAvailabilityStatusAPI = async (
  productId: number,
  availabilityStatus: AvailabilityStatus
) => {
  const res = await fetch(productBaseURL + `/${productId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      availabilityStatus,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to update availabilityStatus");
  }

  return res.json();
};
