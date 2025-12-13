import { CategoryEnum } from "@/enum/products";
import {
  FormControl,
  Paper,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

type Props = {
  value: string;
  onChange: (event: SelectChangeEvent) => void;
};

const CategorySelect = (props: Props) => {
  const { value, onChange } = props;

  const categories = Object.values(CategoryEnum);

  return (
    <FormControl fullWidth component={Paper}>
      <InputLabel id="demo-simple-select-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Category"
        onChange={onChange}
      >
        <MenuItem value="">All</MenuItem>
        {categories.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategorySelect;
