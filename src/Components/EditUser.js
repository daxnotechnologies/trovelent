import {
  Autocomplete,
  Avatar,
  Badge,
  Button,
  Card,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
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

export default function EditUser() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
          <h6 className=" mt-2">
            <b>Upload Profile Picture</b>
          </h6>
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
        <Autocomplete
          className="mb-3"
          fullWidth
          multiple
          size="small"
          id="tags-standard"
          options={userRoles}
          getOptionLabel={(option) => option.title}
          // defaultValue={[top100Films[13]]}
          renderInput={(params) => (
            <TextField
              fullWidth
              {...params}
              label="User Roles"
              placeholder="Select"
            />
          )}
        />
      <FormControl fullWidth size="small" className="mb-3">
        <InputLabel id="demo-simple-select-standard-label">User Role</InputLabel>
        <Select
        fullWidth
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="User Role"
        >
          <MenuItem value={10}>Admin</MenuItem>
          <MenuItem value={20}>Customer</MenuItem>
        </Select>
      </FormControl>
        <TextField
          className="mb-3"
          fullWidth
          size="small"
          id="outlined-basic"
          label="Business Name"
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
          label="Business ID"
          variant="outlined"
        />
        <TextField
          className="mb-3"
          size="small"
          fullWidth
          id="outlined-basic"
          label="Mobile Number"
          variant="outlined"
        />
        <TextField
          className="mb-3"
          size="small"
          fullWidth
          id="outlined-basic"
          label="TIN Number"
          variant="outlined"
        />
        <TextField
          className="mb-3"
          size="small"
          fullWidth
          id="outlined-basic"
          label="VRN Number"
          variant="outlined"
        />
        <TextField
          className="mb-3"
          size="small"
          fullWidth
          id="outlined-basic"
          label="Serial Number"
          variant="outlined"
        />
        <TextField
          className="mb-3"
          size="small"
          fullWidth
          id="outlined-basic"
          label="UIN Number"
          variant="outlined"
        />
        <TextField
          className="mb-3"
          size="small"
          fullWidth
          id="outlined-basic"
          label="Tax Office"
          variant="outlined"
        />
        <TextField
          className="mb-3"
          size="small"
          fullWidth
          id="outlined-basic"
          label="Password"
          variant="outlined"
        />
        <TextField
          className="mb-3"
          size="small"
          fullWidth
          id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={null}
          sx={ButtonStyles}
        >
          Edit User
        </Button>
      </Card>
    </div>
  );
}

const userPermisions = [
  { title: "Add Product" },
  { title: "Add Receipt" },
  { title: "Add User" },
  { title: "Delete User" },
  { title: "Update Receipt" },
  { title: "View User" },
  { title: "View Customers" },
  { title: "View Products" },
  { title: "View Receipt" },
  { title: "View Reports" },
  { title: "Update Stock" },
  { title: "Update Item" },
  { title: "Delete Item" },
  { title: "View Sales Report" },
  { title: "Issue Receipt" },
];

const userRoles = [
  { title: "Admin" },
  { title: "Customer" },
  { title: "Customer" },
];
