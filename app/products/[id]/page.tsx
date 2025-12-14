"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { CardMedia, Chip, Grid, Rating } from "@mui/material";
import { useAppDispatch } from "@/lib/store";
import {
  updateProductAvailabilityStatus,
  updateProductStock,
} from "@/lib/features/products/productSlice";
import UpdateProductModal from "@/components/products/UpdateProductModal";
import {
  AvailabilityChip,
  StyledProductDetailsCard,
} from "@/components/products";
import { UpdatingFieldsEnum } from "@/enum/products";
import { AvailabilityStatus } from "@/interfaces/products";
import {
  PriceTitle,
  Text1,
  Title1,
  Title2,
} from "@/components/common/TextStyles";
import ProductImg from "@/assets/images/product.jpg";
import { ROUTES_URL } from "@/utils/properties";
import {
  AlignCenteredGridContainer,
  SpaceBetweenGridContainer,
  StyledButton,
  StyledLoader,
} from "@/components/common/Index";

const ProductDetailsPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { product } = useSelector((state: any) => state.products);

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const [updatingField, setUpdatingField] = useState<UpdatingFieldsEnum>();

  useEffect(() => {
    if (!product) router.push(ROUTES_URL.PRODUCTS);
  }, [product, router]);

  const handleUpdateStock = (value: number) => {
    dispatch(
      updateProductStock({
        productId: product.id,
        stock: value,
      })
    );
    handleModalClose();
  };

  const handleUpdateAvailabilityStatus = (value: AvailabilityStatus) => {
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

  const handleModalClose = () => setIsUpdateModalOpen(false);

  const handleSubmit = (value: number | AvailabilityStatus) => {
    if (updatingField === UpdatingFieldsEnum.Stock) {
      handleUpdateStock(value as number);
    } else if (updatingField === UpdatingFieldsEnum.IsActive) {
      handleUpdateAvailabilityStatus(value as AvailabilityStatus);
    }
  };

  if (!product) return <StyledLoader />;

  return (
    <>
      <StyledProductDetailsCard>
        <Grid size={12}>
          <SpaceBetweenGridContainer>
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
          </SpaceBetweenGridContainer>
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
              <SpaceBetweenGridContainer>
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
                  <AlignCenteredGridContainer>
                    Rating : &nbsp;
                    <Rating
                      name="half-rating"
                      defaultValue={product.rating}
                      precision={0.5}
                    />
                  </AlignCenteredGridContainer>
                </Grid>
                <Grid size={10}>
                  <Text1>{product.description}</Text1>
                </Grid>
                <Grid size={3}>
                  <AlignCenteredGridContainer>
                    <PriceTitle>Price : &nbsp;</PriceTitle>
                    <Title1>${product.price}</Title1>
                  </AlignCenteredGridContainer>
                </Grid>
                <Grid size={4}>
                  <AlignCenteredGridContainer spacing={2}>
                    <PriceTitle>Stock : &nbsp;</PriceTitle>
                    <Title1>{product.stock}</Title1>
                    <StyledButton onClick={handleUpdateStockOpen}>
                      Update
                    </StyledButton>
                  </AlignCenteredGridContainer>
                </Grid>
              </SpaceBetweenGridContainer>
            </Grid>
          </Grid>
        </Grid>
      </StyledProductDetailsCard>
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
