import { useState } from "react";
import { Grid, TextField } from "@mui/material";
import API from "../../../api";
import Autocomplete from "../../Input/Autocomplete";
import Button from "../../Button/Button";
import RadioGroup from "../../RadioGroup/RadioGroup";
import Modal from "../Modal";

const CreateNewRoleModal = ({ open, onClose, getUserRoles }) => {
  const [isStatic, setIsStatic] = useState(false);
  const [name, setName] = useState("");
  const [distinctiveName, setDistinctiveName] = useState("");
  const [authorities, setAuthorities] = useState([]);
  const [description, setDescription] = useState("");

  const clearInputs = () => {
    setIsStatic(false);
    setName("");
    setDistinctiveName("");
    setAuthorities([]);
    setDescription("");
  };

  const handleCreateNewUser = (e) => {
    e.preventDefault();

    API.post("userRoles", {
      name,
      isStatic: Boolean(isStatic),
      description,
      distinctiveName,
      authorities,
    }).then(() => {
      onClose();
      clearInputs();
      getUserRoles();
    });
  };

  return (
    <Modal
      title="Yeni rol"
      open={open}
      onClose={onClose}
      onSubmit={handleCreateNewUser}
      actionButtons={
        <>
          <Button onClick={onClose}>Bağla</Button>
          <Button primary type="submit">
            Yarat
          </Button>
        </>
      }
    >
      <Grid container spacing="12px" p={2}>
        <Grid item xs={12}>
          <RadioGroup
            required
            id="role"
            title="Rol statikdir?"
            value={isStatic}
            onChange={(e) => setIsStatic(e.target.value)}
            options={[
              { label: "Hə", value: true },
              { label: "Yox", value: false },
            ]}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            label="Adı"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></TextField>
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            label="Fərqləndirici ad"
            fullWidth
            value={distinctiveName}
            onChange={(e) => setDistinctiveName(e.target.value)}
          ></TextField>
        </Grid>

        <Grid item xs={12}>
          <Autocomplete
            label="Səlahiyyətlər"
            value={authorities}
            options={["APP_DELETE", "EDIT"]}
            onChange={(event, newValue) => {
              setAuthorities(newValue);
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            label="Təsviri"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></TextField>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default CreateNewRoleModal;
