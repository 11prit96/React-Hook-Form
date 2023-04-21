import { useForm } from "react-hook-form";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useEffect, useState } from "react";
import RadioGroupRow from "@/ui/RadioGroup";
import Hobbies from "@/ui/Hobbies";
import styles from "../../styles/Form.module.css";

export default function Form() {

  // Form field States
  const [userData, setUserData] = useState({});
  const [birthDate, setBirthDate] = useState(null);
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [designation, setDesignation] = useState("");
  const [otherDesignation, setOtherDesignation] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submitHandler(data) {
    const dataObject = {
      ...data,
      dateOfBirth: birthDate,
      status: status,
      gender: gender,
      designation: designation ? designation : otherDesignation,
      hobbies: hobbies,
    };
    setUserData(dataObject);
    resetField("name");
    resetField("age");
    resetField("bloodGroup");
    resetField("description");
    setBirthDate(null);
    setStatus("");
    setGender("");
    setDesignation("");
    setOtherDesignation("");
    setHobbies([]);
    resetField("salary");
    resetField("tutionFees");
  }

  console.log("userData", userData);

  return (
    <Box>
      <Box
        component="form"
        onSubmit={handleSubmit(submitHandler)}
        className="formContainer"
      >
        {/* Part 1 */}
          {/* Name */}
          <TextField
            size="small"
            label="Name"
            variant="outlined"
            sx={{ width: "100%" }}
            {...register("name", { required: true, maxLength: 20 })}
            error={errors.name ? true : false}
            helperText={errors.name ? "Required Field..." : ""}
          />

          <Box className={styles.flex_spaceBetween}>
            {/* Age */}
            <TextField
              size="small"
              label="Age"
              variant="outlined"
              type="number"
              sx={{ flexBasis: "49%" }}
              {...register("age", { required: true, min: 18, max: 99 })}
              error={errors.age ? true : false}
              helperText={errors.age ? "Incorrect age..." : ""}
            />

            {/* Gender */}
            <TextField
              size="small"
              select
              sx={{ flexBasis: "49%" }}
              label="Gender"
              variant="outlined"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              error={errors.gender ? true : false}
              helperText={errors.gender ? "Required Field..." : ""}
            >
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </TextField>
          </Box>

          <Box className={styles.flex_spaceBetween}>
            {/* DOB */}
            <Box sx={{ flexBasis: "49%" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="DOB"
                  value={birthDate}
                  onChange={(newDate) => setBirthDate(newDate)}
                  renderInput={(params) => (
                    <TextField size="small" {...params} />
                  )}
                />
              </LocalizationProvider>
            </Box>

            {/* Blood Group */}
            <TextField
              label="Blood Group"
              variant="outlined"
              sx={{ flexBasis: "49%" }}
              {...register("bloodGroup", { required: true })}
              error={errors.bloodGroup ? true : false}
              helperText={errors.bloodGroup ? "Required Field..." : ""}
            />
          </Box>
          {/* Description */}
          <TextField
            size="small"
            label="Description"
            variant="outlined"
            multiline
            minRows={2}
            sx={{ marginTop: "1rem", width: "100%" }}
            {...register("description", { required: true })}
            error={errors.description ? true : false}
            helperText={errors.description ? "Required Field..." : ""}
          />

        {/* Part 2 */}
          <Box className={styles.flex_spaceBetween}>
            {/* Status */}
            <TextField
              size="small"
              select
              sx={{ flexBasis: "49%" }}
              label="Status"
              variant="outlined"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              error={errors.status ? true : false}
              helperText={errors.status ? "Required Field..." : ""}
            >
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="employed">Employed</MenuItem>
              <MenuItem value="unemployed">Unemployed</MenuItem>
            </TextField>
            {status === "employed" && (
              <TextField
                size="small"
                label="Salary"
                type="number"
                variant="outlined"
                sx={{ flexBasis: "49%" }}
                {...register("salary", { required: true, maxLength: 20 })}
                error={errors.salary ? true : false}
                helperText={errors.salary ? "Invalid data.." : ""}
              />
            )}
            {status === "student" && (
              <TextField
                size="small"
                label="Tution Fees"
                type="number"
                variant="outlined"
                sx={{ flexBasis: "49%" }}
                {...register("tutionFees", { required: true, maxLength: 20 })}
                error={errors.tutionFees ? true : false}
                helperText={errors.tutionFees ? "Invalid data.." : ""}
              />
            )}
          </Box>

          {/* Designation */}
          <Box className={styles.flex_spaceBetween}>
            <RadioGroupRow
              designation={designation}
              setDesignation={setDesignation}
            />
            <TextField
              label="Other designation"
              value={otherDesignation}
              onChange={(e) => setOtherDesignation(e.target.value)}
              variant="outlined"
              sx={{ marginTop: "1.5rem", flexBasis: "60%" }}
            />
          </Box>

          {/* Hobbies */}
          <Hobbies hobbies={hobbies} setHobbies={setHobbies} />

          {/* Submit Form Button */}
          <Button
            variant="contained"
            type="submit"
            sx={{ marginTop: "1rem", width: "100%" }}
          >
            Submit
          </Button>
      </Box>
    </Box>
  );
}
