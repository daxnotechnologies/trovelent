import { Avatar, Box, Button, Card, IconButton, Switch } from "@mui/material";
import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { ButtonStyles, Iconstyle } from "./styles";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import logo from "../Images/tvlon.png";
import { useNavigate } from "react-router-dom";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Users() {
  const navigate = useNavigate();
  const columns = [
    { field: "id", headerName: "No", width: 60 },
    {
      field: "profile",
      headerName: "Profile Image",
      width: 100,
      renderCell: () => {
        return <Avatar alt="Remy Sharp" src={logo} />;
      },
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: false,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: false,
    },
    {
      field: "company",
      headerName: "Company Name",
      width: 150,
      editable: false,
    },
    {
      field: "agentName",
      headerName: "Agent Name",
      width: 150,
      editable: false,
    },
    {
      field: "agentId",
      headerName: "Agent ID",
      width: 70,
      editable: false,
    },
    {
      field: "number",
      headerName: "Number",
      width: 110,
      editable: false,
    },

    {
      field: "status",
      headerName: "Status",
      renderCell: () => {
        return <Switch {...label} defaultChecked />;
      },
    },
    {
      field: "action",
      headerName: "Actions",
      width: 150,

      renderCell: () => {
        return (
          <div className="row">
            <div className="col-3">
              <Tooltip title="Edit" placement="top">
                <IconButton aria-label="delete">
                  <EditIcon />
                </IconButton>
              </Tooltip>
            </div>
            <div className="col-3">
              <Tooltip title="Delete" placement="top">
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        );
      },
    },
  ];

  const rows = [
    { id: 1, name: "Snow", email: "Jon@gmail.com", company:"Daxno", agentName:"Clifford",agentId:"12", number: "357783478" },
    { id: 2, name: "Lannister", email: "Cersei@gmail.com",company:"Daxno",agentName:"Clifford",agentId:"12", number: "427878273" },
    { id: 3, name: "Lannister", email: "Jaime@gmail.com", company:"Daxno",agentName:"Clifford",agentId:"12", number: "45832877" },
    { id: 4, name: "Stark", email: "Arya@gmail.com",company:"Daxno",agentName:"Clifford",agentId:"12", number: "16238892" },
    { id: 5, name: "Targaryen", email: "Daenerys@gmail.com",company:"Daxno",agentName:"Clifford",agentId:"12", number: null },
    { id: 6, name: "Melisandre", email: "Daenerys@gmail.com",company:"Daxno",agentName:"Clifford",agentId:"12", number: "1503787832" },
    { id: 7, name: "Clifford", email: "Ferrara@gmail.com",company:"Daxno",agentName:"Clifford",agentId:"12", number: "44323283" },
    { id: 8, name: "Frances", email: "Rossini@gmail.com",company:"Daxno",agentName:"Clifford",agentId:"12", number: "3643878734" },
    { id: 9, name: "Roxie", email: "Harvey@gmail.com",company:"Daxno",agentName:"Clifford",agentId:"12", number: "6532787382" },
  ];

  return (
    <div style={{ padding: 40 }}>
      <h5 className="pb-3">
        <b>Users</b>
      </h5>
      <Card style={{ padding: 20 }}>
        <div className="d-flex justify-content-end">
          <Button
            type="submit"
            variant="contained"
            onClick={() => {
              navigate("/Dashboard/AddUser");
            }}
            sx={ButtonStyles}
          >
            Add user
          </Button>
        </div>
        <Box sx={{ height: "80vh", width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            slots={{ toolbar: GridToolbar }}
          />
        </Box>
      </Card>
    </div>
  );
}
