import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../../Components/Navbar";

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
      <Container maxWidth="xl" sx={{ marginTop: "10px", marginBottom: "10px" }}>
        <Grid
          container
          spacing={1}
          sx={{ padding: "5px"}}
        >
          <Grid item xs={12}>
            <Typography variant="h3">Suivi de l'évolution du poids</Typography>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={3}>
                <Typography variant="h5">Poids de départ :</Typography>
                <Divider />
                <Typography variant="body1" color="red">
                  15/01/2020
                </Typography>
                <Typography variant="h5" color="red">
                  75kg
                </Typography>
            </Paper>
            <Paper elevation={3} sx={{marginTop: "5px"}}>
            <Typography variant="h5">IMC de départ :</Typography>
                <Divider />
                <Typography variant="h5" color="red">
                21.7
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3}>
                <Typography variant="h5">Poids actuel :</Typography>
              <Divider />
              <Typography variant="body1" color="red">
                  12/05/2022
                </Typography>
              <Typography variant="h5" color="red">
                90kg
              </Typography>
            </Paper>
            <Paper elevation={3} sx={{marginTop: "5px"}}>
            <Typography variant="h5">IMC actuel :</Typography>
                <Divider />
                <Typography variant="h5" color="red">
                24.4
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={3}>
                <Typography variant="h5">Poids souhaité :</Typography>
              <Divider />
              <Typography variant="body1" color="red">
                  15/08/2022
                </Typography>
              <Typography variant="h5" color="red">
                95kg
              </Typography>
            </Paper>
            <Paper elevation={3} sx={{marginTop: "5px"}}>
            <Typography variant="h5">IMC souhaité :</Typography>
                <Divider />
                <Typography variant="h5" color="red">
                25.8
                </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Divider />
      </Container>
    </div>
  );
};

export default PoidsPage;
