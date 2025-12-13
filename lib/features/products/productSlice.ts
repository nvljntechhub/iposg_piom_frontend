import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchProductsAPI,
  updateProductAvailabilityStatusAPI,
  updateProductStockAPI,
} from "./product.service";
import { AvailabilityStatus, Product } from "@/interfaces/products";

export const fetchProducts = createAsyncThunk(
  "products/list",
  async (
    {
      limit,
      skip,
      searchTerm,
      category,
    }: { limit: number; skip: number; searchTerm?: string; category?: string },
    thunkAPI
  ) => {
    try {
      return await fetchProductsAPI(limit, skip, searchTerm, category);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateProductStock = createAsyncThunk(
  "products/updateStock",
  async (
    { productId, stock }: { productId: number; stock: number },
    thunkAPI
  ) => {
    try {
      return await updateProductStockAPI(productId, stock);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateProductAvailabilityStatus = createAsyncThunk(
  "products/updateProductAvailabilityStatus",
  async (
    {
      productId,
      availabilityStatus,
    }: { productId: number; availabilityStatus: AvailabilityStatus },
    thunkAPI
  ) => {
    try {
      return await updateProductAvailabilityStatusAPI(
        productId,
        availabilityStatus
      );
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

interface InitialStateType {
  list: Product[];
  product: Product | null;
  loading: boolean;
  error: string | null;
  skip: number;
  limit: number;
  total: number;
}

const initialState: InitialStateType = {
  list: [],
  product: null,
  loading: false,
  error: null as string | null,
  skip: 0,
  limit: 10,
  total: 100,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct: (state, action: PayloadAction<Product>) => {
      state.product = action.payload;
    },
    clearSelectedProduct: (state) => {
      state.product = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.products;
        state.total = action.payload.total;
      })
      .addCase(updateProductStock.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProductStock.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
        state.list = state.list.map((item: Product) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(updateProductAvailabilityStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProductAvailabilityStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
        state.list = state.list.map((item: Product) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setSelectedProduct, clearSelectedProduct } =
  productSlice.actions;
export default productSlice.reducer;
