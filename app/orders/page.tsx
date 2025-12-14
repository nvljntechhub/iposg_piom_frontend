"use client";

import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { selectOrders } from "@/lib/features/orders/orderSelectors";
import {
  GridRowsProp,
  GridColDef,
  DataGrid,
  GridPaginationModel,
} from "@mui/x-data-grid";
import { Grid, SelectChangeEvent } from "@mui/material";
import SearchInput from "@/components/input-fields/SearchInput";
import SelectFilter from "@/components/input-fields/SelectFilter";
import { OrderStatusChip } from "@/components/orders/index.style";
import { Order, OrderStatus } from "@/interfaces/order";
import { OrderStatusEnum } from "@/enum/orders";
import { PAGINATION } from "@/utils/properties";
import { StyledTableContainer } from "@/components/common/Index";

const OrdersPage = () => {
  const orders = useSelector(selectOrders);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [orderStatusFilter, setOrderStatusFilter] = useState("");

  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: PAGINATION.OFFSET,
    pageSize: PAGINATION.PAGE_LIMIT,
  });

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesSearch =
        !searchTerm ||
        order.productName.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        !orderStatusFilter || order.status === orderStatusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [orders, searchTerm, orderStatusFilter]);

  const rows: GridRowsProp = filteredOrders.map(
    (order: Order, index: number) => ({
      id: index + 1,
      productName: order.productName,
      customer: order.customer,
      quantity: order.quantity,
      price: order.price,
      status: order.status,
      orderDate: order.orderDate,
    })
  );

  const columns: GridColDef[] = [
    { field: "productName", headerName: "Product Name", width: 200 },
    { field: "customer", headerName: "Customer", width: 200 },
    { field: "quantity", headerName: "Quantity", width: 100 },
    {
      field: "price",
      headerName: "Price ($)",
      width: 120,
      type: "number",
      sortable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 140,
      renderCell: (params) => <OrderStatusChip status={params.value} />,
    },
    { field: "orderDate", headerName: "Order Date", width: 130 },
  ];

  const handleStatusFilterChange = (event: SelectChangeEvent) => {
    setOrderStatusFilter(event.target.value as OrderStatus);
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  };

  return (
    <Grid container rowSpacing={2}>
      <Grid size={12}>
        <Grid container columnSpacing={2}>
          <Grid size={4}>
            <SearchInput value={searchTerm} setValue={setSearchTerm} />
          </Grid>
          <Grid size={2}>
            <SelectFilter
              label="Status"
              value={orderStatusFilter}
              options={Object.values(OrderStatusEnum)}
              onChange={handleStatusFilterChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <StyledTableContainer>
          <DataGrid
            rows={rows}
            columns={columns}
            pagination
            paginationModel={paginationModel}
            onPaginationModelChange={(model: GridPaginationModel) =>
              setPaginationModel(model)
            }
            pageSizeOptions={PAGINATION.PAGE_OPTIONS}
          />
        </StyledTableContainer>
      </Grid>
    </Grid>
  );
};

export default OrdersPage;
