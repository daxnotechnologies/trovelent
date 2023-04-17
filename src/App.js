import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Content from "./Components/Content";
import SignIn from "./Components/Login";
import DashboardMain from "./Components/Dashboard"
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from "./Components/Users";
import Admin from "./Components/Admin";
import UserRoles from "./Components/userRoles";
import Adduser from "./Components/AddUser";
import Addadmin from "./Components/AddAdmin";
import EditUser from "./Components/EditUser";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Dashboard" element={<DashboardMain />}>
          {/* <Route path="/Dashboard/Home" element={<DashboardContent />} /> */}
          <Route path="/Dashboard/Content" element={<Content />} />
          <Route path="/Dashboard/Users" element={<Users  />} />
          <Route path="/Dashboard/AddUser" element={<Adduser  />} />

          <Route path="/Dashboard/Admins" element={<Admin  />} />
          <Route path="/Dashboard/AddAdmin" element={<Addadmin  />} />
          <Route path="/Dashboard/EditUser" element={<EditUser  />} />

          <Route path="/Dashboard/userRoles" element={<UserRoles />} />


        </Route>
      </Routes>
    </Router>
  );
}

export default App;
