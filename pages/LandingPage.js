import { Box, Button } from "@mui/material";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function LandingPage() {
  const [forceRender, setForceRender] = useState(false);

  useEffect(() => {
    setForceRender(true);
  }, []);

  useEffect(() => {
    document.querySelector(".landingPageContainer").classList.toggle("change");
  }, [forceRender]);

  return (
    <div className="landingPageContainer">
      <Box
        className="hamburgerMenu"
        onClick={() => {
          setForceRender(!forceRender);
        }}
      >
        <Box className="line1" />
        <Box className="line2" />
        <Box className="line3" />
      </Box>
      <Box className="menuItems">
        <Box className="item1Container">
          <Link
            href="/"
            style={{ textDecoration: "none", color: "#222" }}
            onClick={() => {
              setForceRender(!forceRender);
            }}
          >
            <Box className="menuItem1">Home</Box>
          </Link>
        </Box>
        <Box className="item2Container">
          <Link
            href="/gallery"
            style={{ textDecoration: "none", color: "#222" }}
            onClick={() => {
              setForceRender(!forceRender);
            }}
          >
            <Box className="menuItem2">Gallery</Box>
          </Link>
        </Box>
        <Box className="item3Container">
          <Link
            href="/about"
            style={{ textDecoration: "none", color: "#222" }}
            onClick={() => {
              setForceRender(!forceRender);
            }}
          >
            <Box className="menuItem3">About</Box>
          </Link>
        </Box>
        <Box className="item4Container">
          <Link
            href="/yourzone"
            style={{ textDecoration: "none", color: "#222" }}
            onClick={() => {
              setForceRender(!forceRender);
            }}
          >
            <Box className="menuItem4">Your Zone</Box>
          </Link>
        </Box>
      </Box>
    </div>
  );
}
