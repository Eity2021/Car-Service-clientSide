import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Car-services/Home/Home";
import About from "./Car-services/About/About";
import Services from "./Car-services/Services/Services";
import Header from "./Car-services/Shared/Header/Header";
import Login from "./Car-services/Login/Login";
import Registration from "./Car-services/Registration/Registration";
import ServiceDetailsPage from "./Car-services/ServiceDetailsPage/ServiceDetailsPage";
import AddServices from "./Car-services/AddServices/AddServices";
import NotFoundPage from "./Car-services/NotFoundPage/NotFoundPage";
import AddCarsInfo from "./Car-services/AddCarsInfo/AddCarsInfo";
import ManageItems from "./Car-services/ManageItems/ManageItems";
import RequireAuth from "./Car-services/RequireAuth/RequireAuth";

import MakeAppointment from "./Car-services/MakeAppointment/MakeAppointment";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      
      <Header></Header>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<RequireAuth><About /></RequireAuth>} />
        <Route path="/service" element={<Services />} />
        <Route path="/addServices" element={<AddServices />} />
        <Route path="/service/:serviceId" element={<ServiceDetailsPage />} />
        <Route path="/makeAppointment/:serviceId" element={<MakeAppointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/addInfo" element={<AddCarsInfo />} />
        <Route path="/manageItems" element={<ManageItems />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
