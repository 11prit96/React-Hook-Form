import LandingPage from "@/pages/LandingPage";
import { Box } from "@mui/material";
import React from "react";

export default function Layout({ children }) {
  return (
    <Box>
      <LandingPage />
      {children}
    </Box>
  );
}
