import React from "react";
import PaymentModule from "./Payment";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Payment from "./Payment";
import PaymentGetAPI from "./PaymentGetAPI";
import "./Payment.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ButtonGroup from "@mui/material/ButtonGroup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";

const theme = createTheme();

function PaymentAddOffer() {
  const initialValues = { userId: "", discount: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const history = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmit(true);
    let keys = Object.keys(formErrors);
    const data = new FormData(event.currentTarget);
    console.log(data);
    console.log({
      userId: data.get("userId"),
      discount: data.get("discount"),
    });
    const userId= data.get("userId")
    const discount= data.get("discount")
    axios.put(`http://localhost:8082/Payment/addoffertopayment/${userId}/${discount}`)
    .then((data) => {console.log(data.data);alert("Discount added")})
    .catch((error) => console.log(error));
    // console.log(formErrors);
   
  };

  const handleChange= (e) => {
    console.log(e);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };


  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        className="container-payment-addOffer"
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0.5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Offer
          </Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <form>
          <TextField
            margin="normal"
            // required
            fullWidth
            id="userId"
            label="User Id"
            name="userId"
            
            value={formValues.userId}
            // autoComplete="email"
            autoFocus
            onChange={handleChange}
            required  
          />
          
          <TextField
            margin="normal"
            // required
            fullWidth
            id="discount"
            label="Discount"
            name="discount"
            autoFocus
            mandatory= "true"
            value={formValues.discount}
            onChange={handleChange}
            required
          />
          
          <div>
            <Button
              variant="contained"
              aria-label="outlined button"
              type="submit"
            >
              ADD OFFER
            </Button>
            <br></br>
      <br></br>
          </div>
          </form>
        </Box>
      </Container>
     
    </ThemeProvider>
  );
}
export default PaymentAddOffer;
