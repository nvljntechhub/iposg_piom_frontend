"use client";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Card, CardMedia, Chip, Grid, Rating } from "@mui/material";
import { PriceTitle, Text1, Title1, Title2 } from "@/components/TextStyles";
import ProductImg from "@/assets/images/product.jpg";
import { useAppDispatch } from "@/lib/store";
import {
  updateProductAvailabilityStatus,
  updateProductStock,
} from "@/lib/features/products/productSlice";
import UpdateProductModal from "@/components/UpdateProductModal";
import { AvailabilityStatusEnum, UpdatingFieldsEnum } from "@/enum/products";
import { Circle } from "@mui/icons-material";
import { AvailabilityChip } from "@/components/Product.style";
import { AvailabilityStatus } from "@/interfaces/products";

const ProductDetailsPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { product } = useSelector((state: any) => state.products);

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const [updatingField, setUpdatingField] = useState<UpdatingFieldsEnum>();

  useEffect(() => {
    if (!product) {
      router.push("/products");
    }
  }, [product]);

  const handleUpdateStock = (value: number) => {
    console.log("value", value);

    dispatch(
      updateProductStock({
        productId: product.id,
        stock: value,
      })
    );
    handleModalClose();
  };

  const handleUpdateAvailabilityStatus = (value: AvailabilityStatus) => {
    console.log("value", value);

    dispatch(
      updateProductAvailabilityStatus({
        productId: product.id,
        availabilityStatus: value,
      })
    );
    handleModalClose();
  };

  const handleUpdateStockOpen = () => {
    setUpdatingField(UpdatingFieldsEnum.Stock);
    setIsUpdateModalOpen(true);
  };

  const handleUpdateStatusOpen = () => {
    setUpdatingField(UpdatingFieldsEnum.IsActive);
    setIsUpdateModalOpen(true);
  };

  const handleModalClose = () => {
    setIsUpdateModalOpen(false);
  };

  const handleSubmit = (value: number | AvailabilityStatus) => {
    if (updatingField === UpdatingFieldsEnum.Stock) {
      handleUpdateStock(value as number);
    } else if (updatingField === UpdatingFieldsEnum.IsActive) {
      handleUpdateAvailabilityStatus(value as AvailabilityStatus);
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <Card sx={{ padding: 3 }}>
        <Grid size={12}>
          <Grid container justifyContent="space-between">
            <Grid size={8}>
              <Title1>Product Details</Title1>
            </Grid>
            <Grid size={2}>
              <Grid container justifyContent="flex-end">
                <AvailabilityChip
                  availabilityStatus={product.availabilityStatus}
                  onClick={handleUpdateStatusOpen}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12}>
          <Grid container columnSpacing={2}>
            <Grid size={2}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={product.thumbnail || ProductImg.src}
                alt="Product"
              />
            </Grid>
            <Grid size={10}>
              <Grid container justifyContent="space-between">
                <Grid size={6}>
                  <Grid container columnSpacing={1}>
                    <Grid>
                      <Title2>{product.name}</Title2>
                    </Grid>
                    <Grid>
                      <Chip
                        label={
                          product.category.charAt(0).toUpperCase() +
                          product.category.slice(1)
                        }
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid size={3} justifyContent="flex-end">
                  <Grid container alignItems="center">
                    Rating : &nbsp;
                    <Rating
                      name="half-rating"
                      defaultValue={product.rating}
                      precision={0.5}
                    />
                  </Grid>
                </Grid>
                <Grid size={10}>
                  <Text1>{product.description}</Text1>
                </Grid>
                <Grid size={3}>
                  <Grid container alignItems="center">
                    <PriceTitle>Price : &nbsp;</PriceTitle>{" "}
                    <Title1>${product.price}</Title1>
                  </Grid>
                </Grid>
                <Grid size={4}>
                  <Grid container alignItems="center" spacing={2}>
                    <PriceTitle>Stock : &nbsp;</PriceTitle>
                    <Title1>{product.stock}</Title1>
                    <Button variant="contained" onClick={handleUpdateStockOpen}>
                      Update
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
      {isUpdateModalOpen && (
        <UpdateProductModal
          isOpen={isUpdateModalOpen}
          onClose={handleModalClose}
          onSubmit={handleSubmit}
          field={updatingField!}
          currentValue={
            updatingField === UpdatingFieldsEnum.Stock
              ? product.stock
              : updatingField === UpdatingFieldsEnum.IsActive &&
                product.availabilityStatus
          }
        />
      )}
    </>
  );
};

export default ProductDetailsPage;
