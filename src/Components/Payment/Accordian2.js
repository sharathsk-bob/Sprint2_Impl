
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

export default function Accordian2() {

  const navigate= useNavigate();
  return (
    
      <Accordion style={{width: '80vw'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>User Payment Options</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ButtonGroup variant="text" aria-label="text button group">
        <Button onClick={() =>navigate('/PaymentAdmin')}>New User Payment</Button>
        <Button onClick={() => navigate('/PaymentUpdateForm')}>Existing User Payment</Button>
        
      </ButtonGroup>
      
        </AccordionDetails>
      </Accordion>
     
    
  );
}


