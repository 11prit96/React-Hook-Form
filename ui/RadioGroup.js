import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioGroupRow({ designation, setDesignation }) {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Designation</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="doctor"
          onClick={() => setDesignation("doctor")}
          control={<Radio />}
          label="Doctor"
        />
        <FormControlLabel
          value="programmer"
          onClick={() => setDesignation("programmer")}
          control={<Radio />}
          label="Programmer"
        />
        <FormControlLabel
          value="engineer"
          onClick={() => setDesignation("engineer")}
          control={<Radio />}
          label="Engineer"
        />
        <FormControlLabel
          value="business"
          onClick={() => setDesignation("business")}
          control={<Radio />}
          label="Business"
        />
      </RadioGroup>
    </FormControl>
  );
}
