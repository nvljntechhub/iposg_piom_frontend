"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/store";
import {
  fetchProducts,
  setSelectedProduct,
} from "@/lib/features/products/productSlice";
import { Grid, SelectChangeEvent } from "@mui/material";
import { GridRowsProp, GridColDef, DataGrid } from "@mui/x-data-grid";
import PriceRangeSlider from "@/components/products/PriceRangeSlider";
import SearchInput from "@/components/input-fields/SearchInput";
import SelectFilter from "@/components/input-fields/SelectFilter";
import { Category, Product } from "@/interfaces/products";
import { CategoryEnum } from "@/enum/products";
import {
  DEFAULT_PRICE_RANGE,
  PAGINATION,
  ROUTES_URL,
} from "@/utils/properties";
import { StyledTableContainer } from "@/components/common/Index";

const ProductList = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { list, loading, total } = useSelector((state: any) => state.products);

  const [page, setPage] = useState<number>(PAGINATION.OFFSET);
  const [limit, setLimit] = useState<number>(PAGINATION.PAGE_LIMIT);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState<number[]>(DEFAULT_PRICE_RANGE);

  useEffect(() => {
    const skip = page * limit;
    const fetchLimit = searchTerm ? PAGINATION.SEARCH_LIMIT : limit;

    dispatch(
      fetchProducts({
        limit: fetchLimit,
        skip,
        searchTerm: searchTerm || undefined,
        category: category || undefined,
      })
    );
  }, [searchTerm, page, limit, category, dispatch]);

  const filteredRows: GridRowsProp = list
    .filter((item: Product) => {
      const price = item.price;
      return price >= priceRange[0] && price <= priceRange[1];
    })
    .map((item: Product) => ({
      id: item.id,
      name: item.title,
      description: item.description,
      category: item.category,
      price: item.price,
      discountPercentage: item.discountPercentage,
      rating: item.rating,
      stock: item.stock,
      thumbnail: item.thumbnail,
      availabilityStatus: item.availabilityStatus,
    }));

  const columns: GridColDef[] = [
    { field: "name", headerName: "Product Name", width: 300 },
    { field: "description", headerName: "Description", width: 200 },
    { field: "category", headerName: "Category", width: 100 },
    { field: "price", headerName: "Price", width: 100 },
    {
      field: "discountPercentage",
      headerName: "Discount Percentage",
      width: 100,
    },
    {
      field: "rating",
      headerName: "Rating",
      width: 100,
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 100,
    },
    {
      field: "availabilityStatus",
      headerName: "Availability Status",
      width: 100,
    },
  ];

  const handleCategoryChange = (event: SelectChangeEvent) =>
    setCategory(event.target.value as Category);

  const handleRowClick = (params: any) => {
    dispatch(setSelectedProduct(params.row));
    router.push(ROUTES_URL.PRODUCTS + `/${params.row.id}`);
  };

  return (
    <Grid container rowSpacing={2} columnSpacing={2}>
      <Grid size={4}>
        <SearchInput value={searchTerm} setValue={setSearchTerm} />
      </Grid>
      <Grid size={2}>
        <SelectFilter
          label="Category"
          value={category}
          options={Object.values(CategoryEnum)}
          onChange={handleCategoryChange}
        />
      </Grid>
      <Grid size={6}>
        <PriceRangeSlider
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          min={DEFAULT_PRICE_RANGE[0]}
          max={DEFAULT_PRICE_RANGE[1]}
        />
      </Grid>
      <Grid size={12}>
        <StyledTableContainer>
          {" "}
          <DataGrid
            rows={filteredRows}
            columns={columns}
            onRowClick={handleRowClick}
            rowCount={total}
            paginationMode="server"
            paginationModel={{ page, pageSize: limit }}
            onPaginationModelChange={(model) => {
              setPage(model.page);
              setLimit(model.pageSize);
            }}
            loading={loading}
            pageSizeOptions={PAGINATION.PAGE_OPTIONS}
          />
        </StyledTableContainer>
      </Grid>
    </Grid>
  );
};

export default ProductList;
