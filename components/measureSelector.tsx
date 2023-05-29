import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FC } from "react";


interface MeasureSelectorProps {
  onSelectionChange: (selection:string) => void; 
  selectedMeasure:string;
}

export const MeasureSelector: FC<MeasureSelectorProps> = ({onSelectionChange, selectedMeasure}) => {

  return(
    <FormControl sx={{ m: 1, minWidth: 180}}>
    <InputLabel id="demo-simple-select-label">Select a Measure</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={selectedMeasure}
      label="uselessLabel?"
      onChange={(e) => onSelectionChange(e.target.value)}
    >
      <MenuItem value={0}>Lexical Richness</MenuItem>
      <MenuItem value={1}>Entropy</MenuItem>
    </Select>
    </FormControl>
  );
};
