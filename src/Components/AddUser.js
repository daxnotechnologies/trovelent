import {
  Avatar,
  Badge,
  Button,
  Card,
  IconButton,
  TextField,
  styled,
} from "@mui/material";
import * as React from "react";
import { ButtonStyles } from "./styles";
import logo from "../Images/tvlon.png";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export default function Adduser() {
  return (
    <div style={{ padding: 40 }}>
      <Card style={{ padding: 40 }}>
        <div className=" mb-4">

        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <SmallAvatar>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input hidden accept="image/*" type="file" />
                <AddAPhotoIcon />
              </IconButton>
            </SmallAvatar>
          }
        >
          <Avatar sx={{ width: 100, height: 100 }} alt="Upload" src={logo} />

        </Badge>
        <h6 className=" mt-2"><b>Upload Profile Picture</b></h6>

        </div>

        <TextField
          className="mb-3"
          fullWidth
          size="small"
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        <TextField
          className="mb-3"
          fullWidth
          size="small"
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <TextField
          className="mb-3"
          fullWidth
          size="small"
          id="outlined-basic"
          label="Company Name"
          variant="outlined"
        />
        <TextField
          className="mb-3"
          size="small"
          fullWidth
          id="outlined-basic"
          label="Agent Name"
          variant="outlined"
        />
        <TextField
          className="mb-3"
          size="small"
          fullWidth
          id="outlined-basic"
          label="Agent ID"
          variant="outlined"
        />
        <TextField
          className="mb-3"
          size="small"
          fullWidth
          id="outlined-basic"
          label="Number"
          variant="outlined"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={null}
          sx={ButtonStyles}
        >
          Add User
        </Button>
      </Card>
    </div>
  );
}
