import { Search } from "@mui/icons-material";
import { TextField, InputAdornment } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

type Props = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

const SearchInput = (props: Props) => {
  const { value, setValue } = props;
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search"
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setValue(e.target.value)
      }
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
        borderRadius: 2,
        "& .MuiOutlinedInput-root": {
          backgroundColor: (theme) => theme.palette.background.paper,
        },
      }}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default SearchInput;
