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

function PaymentAdmin() {
  const initialValues = {userId: "", payment: "", discount: "", planId: ""};
  const [payment, setPayment] = useState([]);
  const [discount, setDiscount] = useState([]);
  const [userId, setUserId] = useState("");
  const [planId, setPlanId] = useState("");
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const postData = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    axios
      .post("http://localhost:8082/Payment/paythepayment", {
        payment: payment,
        discount: discount,
        userId: userId,
        planId: planId,
      })
      .then((response) => console.log("posting data", response))
      .catch((error) => console.log(error));
  };
  // const navigate = useNavigate();
  const history = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
 
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
    console.log(event);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[A-Za-z]+[0-9]$/;
   
    if (!values.userId) {
        errors.userId = "User Id is required!";
      }else if (!regex.test(values.userId)) {
        errors.userId = "This is not a valid User Id format!";
      }
    if (!values.payment) {
      errors.payment = "Amount is required";
    } else if (values.payment.length < 4) {
      errors.payment = "Value must be more than 3 digits";
    } else if (values.payment.length > 6) {
      errors.payment = "Value cannot exceed more than 6 digits";
    }
   if (!values.discount) {
        errors.discount = "Value is required";
      } else if (values.discount.length > 3) {
        errors.discount = "Value must be less than 4 digits";
      } else if (values.discount.length < 0) {
        errors.discount = "Field value invalid";
      }
    if (!values.planId) {
         errors.planId = "Appropriate Plan Id is required!";
         }else if (!isNaN(+values.planId)) {
           errors.planId = "This is not a valid Plan Id format!";
         }
         console.log(typeof(values.planId));
    return errors;
  };
  


  
  return (
    <ThemeProvider theme={theme}>
      <br></br>
      <br></br>
      <Container component="main" maxWidth="xs" className="container-payment">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Payment
          </Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="Id"
            label="User Id"
            name="id"
            mandatory="true"
            // autoComplete="email"
            autoFocus
            value={userId}
            onChange={(e) => {
              setUserId(e.target.value);
            }}
            helperText={formErrors.userId}
            error = {!formErrors.id ? false : true}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="payment"
            label="Amount"
            name="payment"
            // autoComplete="email"
            autoFocus
            value={payment}
            mandatory="true"
            onChange={(e) => {
              setPayment(e.target.value);
              
            }}
            helperText={formErrors.payment}
            error = {!formErrors.id ? false : true}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="discount"
            label="Discount"
            name="discount"
            autoFocus
            value={discount}
            mandatory="true"
            onChange={(e) => {
              setDiscount(e.target.value);
            }}
            helperText={formErrors.discount}
            error = {!formErrors.id ? false : true}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="planId"
            label="Plan ID"
            name="planId"
            autoFocus
            value={planId}
            mandatory="true"
            onChange={(e) => {
              setPlanId(e.target.value);
            }}
            helperText={formErrors.planId}
            error = {!formErrors.id ? false : true}
          />

          <div>
            <Button
              variant="contained"
              aria-label="outlined button"
              onClick={postData}
            >
              ADD NEW USER PAYMENT{" "}
            </Button>
            <br></br>
            <br></br>
          </div>
        </Box>
      </Container>
      <br></br>
      <br></br>
    </ThemeProvider>
  );
}
export default PaymentAdmin;
