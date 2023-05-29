import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value} Years`;
}

interface SplitSliderProps{
    setSplitLenght: (value: number) => void;
}

export default function SplitSlider({setSplitLenght}) {
  return (
    <Box sx={{ width: 150 }}>
      <Slider
        aria-label="Split data"
        defaultValue={0}
        getAriaValueText={setSplitLenght}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={10}
      />
    </Box>
  );
}