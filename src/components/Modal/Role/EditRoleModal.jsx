import { useEffect, useState } from "react";
import { Grid, TextField } from "@mui/material";
import API from "../../../api";
import Autocomplete from "../../Input/Autocomplete";
import Button from "../../Button/Button";
import RadioGroup from "../../RadioGroup/RadioGroup";
import Modal from "../Modal";

const EditRoleModal = ({ open, onClose, getUserRoles, role }) => {
  const [isStatic, setIsStatic] = useState(false);
  const [name, setName] = useState("");
  const [distinctiveName, setDistinctiveName] = useState("");
  const [authorities, setAuthorities] = useState([]);
  const [description, setDescription] = useState("");

  const fillInputs = ({
    isStatic,
    name,
    distinctiveName,
    authorities,
    description,
  }) => {
    setIsStatic(isStatic);
    setName(name);
    setDistinctiveName(distinctiveName);
    setAuthorities(authorities);
    setDescription(description);
  };

  const handleEditRole = (e) => {
    e.preventDefault();

    API.patch(`userRoles/${role.id}`, {
      isStatic,
      name,
      distinctiveName,
      authorities,
      description,
    }).then(() => {
      getUserRoles();
      onClose();
    });
  };

  useEffect(() => {
    if (Object.keys(role).length !== 0) {
      fillInputs(role);
    }
  }, [role]);

  return (
    <Modal
      title="Rolun redaktəsi"
      open={open}
      onClose={onClose}
      onSubmit={handleEditRole}
      actionButtons={
        <>
          <Button onClick={onClose}>Bağla</Button>
          <Button primary type="submit">
            Yadda saxla
          </Button>
        </>
      }
    >
      <Grid container spacing="12px" p={2}>
        <Grid item xs={12}>
          <RadioGroup
            required
            disabled
            id="role-edit"
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
            disabled
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

export default EditRoleModal;
