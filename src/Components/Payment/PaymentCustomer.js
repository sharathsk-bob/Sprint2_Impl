import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Payment from "./Payment";
import PaymentGetAPI from "./PaymentGetAPI";
import "./Payment.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
// import PaymentPostForm from './PaymentPostForm';

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
import Accordian2 from "./Accordian2";

const theme = createTheme();

function PaymentCustomer() {
  return (
    <div style={{padding: '60px'}}>
      
       <Container  height ='40vh' Width="50vw" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)',padding: '50px'}} >
       <h1 style={{color:'black', borderBlock:"red"}}>Customer Payment Options</h1>
     
      <Accordian2/>
      </Container>
    </div>
  )
}

export default PaymentCustomer