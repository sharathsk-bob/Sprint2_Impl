import React from "react";
import PaymentModule from "./Payment";
import axios from 'axios';
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
import { json } from "react-router-dom";

const theme = createTheme();

function PaymentUpdateForm() {
  const initialValues = { id:"",userId: "", payment: "", discount: "", planId: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    console.log(e);
    // if(e.target.name === 'role') {
    //   console.log(e.target.value);
    // }
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors(validate(formValues));
    console.log(formValues);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormErrors(validate(formValues));
    // setFormErrors(validate(formValues));
   
    console.log(formErrors);
    let keys = Object.keys(formErrors);

    if (keys.length === 0) {
      console.log("No Errors");
      axios
        .put(
          `http://localhost:8082/Payment/updatepayment`,
          JSON.stringify(formValues),
          { headers: { "Content-Type": "application/json" } }
        )
        .then((data) => {console.log(data.data);alert("Data updated successfully")})
        .catch((error) => console.log(error));
        setIsSubmit(true);
    } else {
      console.log("Errors Present");
    }
    // navigate('/login');
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[A-Za-z]{2}[0-9]+$/;
    const numbers = /^[0-9]+$/;
    if (!values.id) {
      errors.id = "ID is required!";
    }else if ((!numbers.test(values.id))) {
      errors.id = "This is not a valid ID format!";
    }

    if (!values.userId) {
        errors.userId = "User Id is required!";
      }else if (!regex.test(values.userId)) {
        errors.userId = "This is not a valid User Id format!";
      }
    if (!values.payment) {
      errors.payment = "Value is required";
    } else if (values.payment.length < 3) {
      errors.payment = "Value must be more than 4 digits";
    } else if (values.payment.length > 6) {
      errors.payment = "Value cannot exceed more than 6 digits";
    }
   if (!values.discount) {
        errors.discount = "Value is required";
      } else if (values.discount.length > 3) {
        errors.discount = "Value must be less than 4 digits";
      } else if (values.discount.length < 0) {
        errors.discount = "Invalid value";
      }
    if (!values.planId) {
         errors.planId = "Plan Id is required!";
         }else if (!isNaN(+values.planId)) {
           errors.planId = "This is not a valid Plan Id format!";
         }
         console.log(typeof(errors));
    return errors;
  };

  const navigate = useNavigate();
  const history = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <br></br>
      <br></br>
      <Container component="main" maxWidth="xs" className="container-payment">
        <CssBaseline />
        <br></br>
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // marginBottom: 3,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Update Payment Details
          </Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        
        <TextField
            
            margin="normal"
            required
            fullWidth
            id="id"
            label="id"
            name="id"
            mandatory="true"
            // autoComplete="email"
            autoFocus
            value={formValues.id}
            onChange={handleChange}
            helperText={formErrors.id}
            error = {!formErrors.id ? false : true}
          />
          
          <TextField
          
            margin="normal"
            // required
            fullWidth
            id="user id"
            label="User Id"
            name="userId"
            // mandatory="true"
            value={formValues.userId}
            // autoComplete="email"
            autoFocus
            onChange={handleChange}
            helperText={formErrors.userId}
            error = {!formErrors.userId ? false : true}
          />
          <TextField
          
            margin="normal"
            // required
            fullWidth
            id="payment"
            label="payment"
            name="payment"
            // mandatory= "true"
            // autoComplete="email"
            autoFocus
            value={formValues.payment}
            onChange={handleChange}
            helperText={formErrors.payment}
            error = {!formErrors.payment ? false : true}
          />
          <TextField
          
            margin="normal"
            // required
            fullWidth
            id="discount"
            label="Discount"
            name="discount"
            autoFocus
            // mandatory="true"
            value={formValues.discount}
            onChange={handleChange}
            helperText={formErrors.discount}
            error = {!formErrors.discount ? false : true}
          />
          <TextField
          
            margin="normal"
            // required
            fullWidth
            id="planId"
            label="Plan ID"
            name="planId"
            autoFocus
            // mandatory="true"
            value={formValues.planId}
            onChange={handleChange}
            helperText={formErrors.planId}
            error = {!formErrors.planId ? false : true}
          />
          <br></br>

          <div>
            <Button data-testid="delete"
              variant="contained"
              aria-label="outlined button"
              onClick={handleSubmit}
            >
              UPDATE{" "}
            </Button>
            <br></br>
            <br></br>
          </div>
        </Box>
        <br></br>
      </Container>
      <br></br>
      <br></br>
    </ThemeProvider>
  );
}
export default PaymentUpdateForm;
