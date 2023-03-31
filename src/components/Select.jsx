import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectCustom({ select, setSelect, value }) {
  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  return (
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Entreprise</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={select}
          onChange={handleChange}
          label="Entreprise"
          sx={{backgroundColor: "white"}}
        >
            {value.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
            ))}
        </Select>
      </FormControl>
  );
}