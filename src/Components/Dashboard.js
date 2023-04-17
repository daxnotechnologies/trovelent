import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import { Iconstyle, TextStyles } from "./styles";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, Outlet } from "react-router-dom";
import { PersonPinCircleOutlined } from "@mui/icons-material";
import logo from "../Images/tvlon.png";
import { IconButton, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountMenu from "./AvatarMenu";
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardMain() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="absolute"
          open={open}
          style={{ backgroundColor: "#000" }}
        >
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit" >
              <AccountMenu />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box sx={{ backgroundColor: "#000" }}>
          <Drawer variant="permanent" open={open}>
            {/* <Toolbar>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <IconButton onClick={toggleDrawer}>
                  <ChevronLeftIcon style={Iconstyle} />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar> */}
            <Box sx={{ backgroundColor: "#000" }}>
              <div className="d-flex justify-content-center pt-4 pb-4">
                <img src={logo} width={"100px"}></img>
              </div>
              <Divider/>
              <React.Fragment>
                <Link to="/Dashboard" underline="none">
                  <ListItemButton>
                    <ListItemIcon>
                      <HomeIcon style={Iconstyle} />
                    </ListItemIcon>
                    <ListItemText style={TextStyles} primary="Dashboard" />
                  </ListItemButton>
                </Link>

                <Link to="Users" underline="none">
                  <ListItemButton>
                    <ListItemIcon>
                      <PeopleAltIcon style={Iconstyle} />
                    </ListItemIcon>
                    <ListItemText style={TextStyles} primary="Users" />
                  </ListItemButton>
                </Link>
                <Link to="Admins" underline="none">
                  <ListItemButton>
                    <ListItemIcon>
                      <PersonPinCircleOutlined style={Iconstyle} />
                    </ListItemIcon>
                    <ListItemText style={TextStyles} primary="Admins" />
                  </ListItemButton>
                </Link>
                {/* <Link to="userRoles" underline="none">
                  <ListItemButton>
                    <ListItemIcon>
                      <LockPersonIcon style={Iconstyle} />
                    </ListItemIcon>
                    <ListItemText style={TextStyles} primary="Role Permissions" />
                  </ListItemButton>
                </Link> */}
                <Link to="/" underline="none">
                  <ListItemButton>
                    <ListItemIcon>
                      <LogoutIcon style={Iconstyle} />
                    </ListItemIcon>
                    <ListItemText style={TextStyles} primary="Logout" />
                  </ListItemButton>
                </Link>
                {/* <Link to="Content" underline="none">
                  <ListItemButton>
                    <ListItemIcon>
                      <PersonPinCircleOutlined style={Iconstyle} />
                    </ListItemIcon>
                    <ListItemText style={TextStyles} primary="Content" />
                  </ListItemButton>
                </Link> */}
              </React.Fragment>
            </Box>
          </Drawer>
        </Box>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardMain />;
}
