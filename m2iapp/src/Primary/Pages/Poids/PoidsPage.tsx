import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../../Navbar";

const PoidsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/poids");
    }

    if (!authToken) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <Navbar />
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "#cfe8fc", height: "80vh" }}>
          <h1>Poids page</h1>
        </Box>
      </Container>
    </div>
  );
};

export default PoidsPage;
