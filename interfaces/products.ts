export interface Product {
  id: number;
  title: string;
  description: string;
  category: Category;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  thumbnail: string;
  availabilityStatus: "In Stock" | "Low Stock" | "Out of Stock";
}

export type Category = "beauty" | "fragrances" | "furniture" | "groceries";
export type AvailabilityStatus = "In Stock" | "Low Stock" | "Out of Stock";

export interface ProductFilters {
  search: string;
  category: string;
  priceRange: number[];
}

export interface ProductState {
  list: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  filters: ProductFilters;
  currentPage: number;
  totalPages: number;
}
