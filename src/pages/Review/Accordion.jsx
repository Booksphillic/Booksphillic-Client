import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { borderBottom } from '@mui/system';
export default function SimpleAccordion({id}) {
  return (
    <div>
      <Accordion square={true} style={{padding:"0 10% 0 10%", border:"none", boxShadow:"none"}} disableGutters={true} >
        <AccordionSummary
          style={{height:"113px"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize:"30px", fontWeight:"700" }}></Typography>
        </AccordionSummary>
        <AccordionDetails style={{padding: "20px 0"}}>
          
        </AccordionDetails>
      </Accordion>

      <Accordion square={true} disableGutters={true}>
        <AccordionSummary
         style={{padding:"0 10% 0 10%", height:"114px", border: "none"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontSize:"30px", fontWeight:"700" }}>Q&amp;A</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography height={"1000px"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
