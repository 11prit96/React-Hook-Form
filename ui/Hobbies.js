import { Box, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export default function Hobbies({ hobbies, setHobbies }) {
  const handleAdd = () => {
    const newHobbiesList = [...hobbies, []];
    setHobbies(newHobbiesList);
  };

  const handleChange = (e, i) => {
    const inputData = [...hobbies];
    inputData[i] = e.target.value;
    setHobbies(inputData);
  };

  const handleDelete = (i) => {
    const deleteHobby = [...hobbies];
    deleteHobby.splice(i, 1);
    setHobbies(deleteHobby);
  };

  return (
    <div style={{ position: "relative" }}>
      <Typography
        sx={{ fontSize: "1rem", color: "#666", marginBottom: "0.5rem" }}
      >
        Hobbies
      </Typography>
      <Box sx={{ position: "absolute", top: 0, right: 5 }}>
        <Tooltip title="Add">
          <IconButton onClick={() => handleAdd()}>
            <AddIcon />
          </IconButton>
        </Tooltip>
      </Box>
      {hobbies.map((hobby, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          <TextField
            size="small"
            variant="outlined"
            label=""
            value={hobby}
            onChange={(e) => handleChange(event, index)}
            sx={{ flexBasis: "80%" }}
          />
          <Box sx={{ flexBasis: "10%" }}>
            <Tooltip title="Remove">
              <IconButton onClick={() => handleDelete()}>
                <RemoveCircleIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      ))}
    </div>
  );
}
