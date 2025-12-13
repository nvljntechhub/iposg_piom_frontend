import { AvailabilityStatus, Product } from "@/interfaces/products";

export const fetchProductsAPI = async (
  limit: number,
  skip: number,
  searchTerm?: string,
  category?: string
) => {
  let url = "";

  if (category) {
    url = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`;
  } else if (searchTerm) {
    url = `https://dummyjson.com/products/search?q=${searchTerm}&limit=${limit}&skip=${skip}`;
  } else {
    url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
  }

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch products");

  const data = await res.json();

  if (category && searchTerm && data.products) {
    data.products = data.products.filter((p: Product) => {
      console.log("search term", searchTerm.toLowerCase());
      console.log("title", p.title.toLowerCase());

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
  const res = await fetch(`https://dummyjson.com/products/${productId}`, {
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
  console.log("availabilityStatus", availabilityStatus);

  const res = await fetch(`https://dummyjson.com/products/${productId}`, {
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
