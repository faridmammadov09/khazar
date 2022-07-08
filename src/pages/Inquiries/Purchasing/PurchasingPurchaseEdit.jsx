import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Stack, TextField } from "@mui/material";
import API from "../../../api";
import FormWrapper from "../../../components/Form/FormWrapper";
import InfoInquiryCreator from "../../../components/InfoInquiryCreator/InfoInquiryCreator";
import Select from "../../../components/Select/Select";
import Button from "../../../components/Button/Button";

const PurchasingPurchaseEdit = () => {
  const { id } = useParams();
  const [fullName, setFullName] = useState("");
  const [note, setNote] = useState("");
  const [resultText, setResultText] = useState("");
  const [result, setResult] = useState("");

  const fillInputs = ({ fullName, note, resultText }) => {
    setFullName(fullName);
    setNote(note);
    setResultText(resultText);
  };

  const getInquiry = async () => {
    const { data } = await API.get(`purchases/${id}`);
    fillInputs(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  useEffect(() => {
    getInquiry();
  }, []);

  return (
    <Grid container sx={{ justifyContent: "center" }} spacing={2}>
      <Grid item xs={10}>
        <InfoInquiryCreator name={fullName} />
      </Grid>

      <Grid item xs={10}>
        <form onSubmit={handleSubmit}>
          <FormWrapper title="Satınalma göndərməsi" showInfoButton>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  disabled
                  type="text"
                  label="Qeyd"
                  fullWidth
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  disabled
                  type="text"
                  label="Nəticə mətni"
                  fullWidth
                  value={resultText}
                  onChange={(e) => setResultText(e.target.value)}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <Select
                  required
                  label="Nəticə"
                  value={result}
                  onChange={(value) => setResult(value)}
                  options={["Təstiqləndi"]}
                />
              </Grid>
            </Grid>
          </FormWrapper>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="flex-end"
            sx={{ py: 2 }}
          >
            <Button type="submit" primary>
              Yadda saxla və Bitir
            </Button>
          </Stack>
        </form>
      </Grid>
    </Grid>
  );
};

export default PurchasingPurchaseEdit;
