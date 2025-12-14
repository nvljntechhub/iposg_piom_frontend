import {
  FormControl,
  Paper,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

type Props = {
  label: string;
  value: string;
  options: string[];
  onChange: (event: SelectChangeEvent) => void;
};

const SelectFilter = (props: Props) => {
  const { label, value, options, onChange } = props;

  return (
    <FormControl fullWidth component={Paper}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} label={label} onChange={onChange}>
        <MenuItem value="">All</MenuItem>
        {options.map((option: string) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectFilter;
