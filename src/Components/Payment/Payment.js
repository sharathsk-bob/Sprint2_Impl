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
import SimpleAccordion1 from "./SimpleAccordion1";
import Accordian2 from "./Accordian2";


const theme = createTheme();
function PaymentModule(){
  return(
    <div style={{padding: '50px'}}>
      
       <Container  height ='30vh' Width="50vw" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)',padding: '50px'}} >
       <h1 style={{color:'black', borderBlock:"red"}}>Payment Preferences</h1>
      <SimpleAccordion1/>
      <br></br>
      <Accordian2/>
      </Container>
    </div>
  )
}
export default PaymentModule;

// function PaymentModule() {
//   const navigate = useNavigate();
//   const history = useNavigate();
//   const initialValues = { loginName: "", email: "", password: "" };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   var isLogged = useSelector((state) => state.login);
//   const dispatch = useDispatch();
//   const [isLoggedIn, setisLoggedIn] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       id: data.get("email"),
//       amount: data.get("password"),
//     });
//   };

//   const fetchUsers = async () => {
//     await axios
//       .get("http://localhost:8020/capg/userinterface/users", {
//         headers: { "Content-Type": "application/json" },
//       })
//       .then((data) => {
//         //let num=[0];
//         for (let i = 0; i < data.data.length; i++) {
//           if (data.data[i].id == formValues.id) {
//             console.log("Logged In");
//             //dispatch(login());
//             localStorage.setItem("isLoggedIn", true);
//             isLogged = true;
//             if (data.data[i].role === "Admin") {
//               history("/admin");
//             } else if (data.data[i].role === "Customer") {
//               history("/customer");
//             } else {
//               isLogged = false;
//               setisLoggedIn = true;
//               localStorage.setItem("isLogged", false);
//             }
//             break;
//           } else {
//             validate(formValues);
//           }
//         }
//       })
//       .catch((error) => console.log(error));
//   };

//   useEffect(() => {
//     //const loginState=localStorage.getItem("isLoggedIn");
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues);
//     }
//   }, [formErrors]);

//   const validate = (values) => {
//     const errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     if (!values.loginName) {
//       errors.loginName = "Login name is required!";
//     }
//     if (!values.email) {
//       errors.email = "Email is required!";
//     } else if (!regex.test(values.email)) {
//       errors.email = "This is not a valid email format!";
//     }
//     if (!values.password) {
//       errors.password = "Password is required";
//     } else if (values.password.length < 4) {
//       errors.password = "Password must be more than 4 characters";
//     } else if (values.password.length > 10) {
//       errors.password = "Password cannot exceed more than 10 characters";
//     }
//     if (!isLogged) {
//       errors.login = "Invalid Credentials";
//     }
//     return errors;
//   };
//   const PayDis = () => {
//     history("/PaymentGetAPI");
//   };
//   const PayPost = () => {
//     history("/PaymentGetAPI");
//   };
//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs" className="container-payment">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Payment
//           </Typography>
//         </Box>
//         <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="Id"
//             label="Enter Id"
//             name="id"
//             // autoComplete="email"
//             autoFocus
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Amount"
//             name="amount"
//             // autoComplete="email"
//             autoFocus
//           />
//           <div>
//             {/* <Button onClick={PayPost}>POST</Button> */}
//             <ButtonGroup
//               variant="contained"
//               aria-label="outlined primary button group"
//               sx={{ mt: 3, mb: 2 }}
//               style={{ marginLeft: "15%" }}
//             >
//               <Button onClick={PayDis}>GET</Button>
//               {/* <Button onClick={()=>navigate("/payment")}>POST</Button> */}
//               <Button>PUT</Button>
//               <Button>DELETE</Button>
//             </ButtonGroup>
//           </div>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// }

//   const theme = createTheme();

// function PaymentModule(){

//   const navigate = useNavigate();

//     const handleSubmit = (event) => {
//       event.preventDefault();
//       const data = new FormData(event.currentTarget);
//       console.log({
//         email: data.get('email'),
//         password: data.get('password'),
//       });
//     };

//     return (
//       <ThemeProvider theme={theme}>
//         <Container component="main" maxWidth="xs">
//           <CssBaseline />
//           <Box
//             sx={{
//               marginTop: 8,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Sign in
//             </Typography>
//             <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="URL"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//               />

//               <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ mt: 3, mb: 2 }} style={{marginLeft:'15%'}}>
//         <Button>GET</Button>
//         <Button onClick={()=>navigate("/payment")}>POST</Button>
//         <Button>PUT</Button>
//         <Button>DELETE</Button>
//       </ButtonGroup>

//             </Box>
//           </Box>

//         </Container>
//       </ThemeProvider>
//     );
//   }

// function PaymentModule() {

//   const [weatherData,setWeatherData]=useState("");
//   const [weatherData2,setWeatherData2]=useState("");
//   const [weatherData3,setWeatherData3]=useState("");

//   const history=useNavigate();

//   useEffect(()=>{
//     axios.get('http://localhost:8020/capg/userinterface/users',{headers:{"Content-Type" : "application/json"}})
//     .then((data)=>{
//       for(let i=0;i<data.data.length;i++){
//         setWeatherData(data.data[18].paymentList[1]);
//         setWeatherData2(data.data[21].paymentList[2]);
//         setWeatherData3(data.data[22].paymentList[3]);
//       }
//     }).catch((error)=>setWeatherData({ errorMessage: error.error}));
//   },[]);

//   const handleSearch=()=>{
//     var errorMessage;
//          axios.get('http://localhost:8020/capg/userinterface/users',{headers:{"Content-Type" : "application/json"}})
//         .then((data)=>{
//             setWeatherData(data.data[21].nutritionPlan
//             );
//         }).catch((error)=>setWeatherData({ errorMessage: error.error}));

//   };
//     const getAdmin=()=>{
//         var errorMessage;
//         axios.get('http://localhost:8020/capg/userinterface/users',{headers:{"Content-Type" : "application/json"}})
//         .then((data)=>
//             console.log(data.data[21])).catch((error)=>setWeatherData({ errorMessage: error.error}));
//     }
//     const Pay=()=>{
//         history("/payment")
//     }

//     const PayDis=()=>{
//       history("/PaymentGetAPI")
//   }
//   const PayNew=()=>{
//     history("/PaymentGetAPI")
// }
//   return (

//     <div >
//         <h3>Payment</h3>
//         <form className='container-payment'>
//         {weatherData &&(
//           <React.Fragment>
//             <div >

//             <p style={{border: "2px solid black"}}>Price:{weatherData.payment}</p>
//             <p>CreatedAt:{weatherData.created_At}</p>
//             <p>UpdatedAt:{weatherData.updated_At}</p>
//             <p>Discount:{weatherData.discount}</p>
//             <button >PAY</button>
//              </div>
//             </React.Fragment>
//             )
//     }
//      </form>
//      <button  onClick={PayDis}>Show All Payments</button>
//      <button  onClick={PayNew}>Make new Payment</button>
//     </div>

//   )
// }

// export default PaymentModule;
