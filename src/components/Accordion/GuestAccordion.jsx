import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputDate from "../Input/InputDate";
import RadioGroup from "../RadioGroup/RadioGroup";

const GuestAccordion = ({ id, title }) => {
  const [arrivalDate, setArrivalDate] = useState("");
  const [guestStatus, setGuestStatus] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [note, setNote] = useState("");

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${id}-content`}
        id={`${id}-header`}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <RadioGroup
              id="status"
              title="Status"
              value={guestStatus}
              onChange={(e) => setGuestStatus(e.target.value)}
              options={[
                { label: "Gəldi", value: "Gəldi" },
                { label: "Gəlmədi", value: "Gəlmədi" },
                { label: "Buraxılmadı", value: "Buraxılmadı" },
              ]}
            />
          </Grid>

          <Grid item xs={6}>
            <InputDate
              required
              label="Gəlmə tarixi"
              value={arrivalDate}
              onChange={(newValue) => setArrivalDate(newValue)}
            />
          </Grid>

          <Grid item xs={6}>
            <InputDate
              required
              label="Getmə tarixi"
              value={departureDate}
              onChange={(newValue) => setDepartureDate(newValue)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              type="text"
              label="Qeyd"
              fullWidth
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></TextField>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default GuestAccordion;
