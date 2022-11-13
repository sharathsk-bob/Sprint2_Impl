
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

export default function SimpleAccordion1() {

  const navigate= useNavigate();
  return (
    
      <Accordion style={{width: '80vw'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Admin Payment Options</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ButtonGroup variant="text" aria-label="text button group">
        <Button onClick={() =>navigate('/PaymentAdmin')}>Add new user's payment</Button>
        <Button onClick={() => navigate('/PaymentUpdateForm')}>Update Existing User Payment Details</Button>
        <Button onClick={() =>navigate('/PaymentGetAPI')}>Show all payments</Button>
        <Button onClick={() =>navigate("/PaymentAddOffer")}>Add Offer</Button>
      </ButtonGroup>
      
        </AccordionDetails>
      </Accordion>
     
    
  );
}


