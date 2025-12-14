"use client";

import { Box, InputLabel, Paper, Slider, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type Props = {
  max: number;
  min: number;
  priceRange: number[];
  setPriceRange: Dispatch<SetStateAction<number[]>>;
};

export default function PriceRangeSlider({
  min,
  max,
  priceRange,
  setPriceRange,
}: Props) {
  const handleChange = (_: any, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const minPercent = ((priceRange[0] - min) / (max - min)) * 100;
  const maxPercent = ((priceRange[1] - min) / (max - min)) * 100;

  return (
    <Box component={Paper} sx={{ padding: "17px 30px" }}>
      <InputLabel>Price Range</InputLabel>
      <Box width="100%" position="relative" sx={{ padding: "2px" }}>
        <Slider
          value={priceRange}
          onChange={handleChange}
          valueLabelDisplay="off"
          min={min}
          max={max}
        />

        <Box position="absolute" top={40} left={`calc(${minPercent}% - 12px)`}>
          <Typography fontSize={12}>${priceRange[0]}</Typography>
        </Box>

        <Box position="absolute" top={40} left={`calc(${maxPercent}% - 12px)`}>
          <Typography fontSize={12}>${priceRange[1]}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
