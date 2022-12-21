import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Home from "./Feature/Home/Home";
import ManagerUser from "./Feature/ManagerUser/ManagerUser";
import ManagerProducts from "./Feature/ManagerProducts/ManagerProducts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Routes replace Switch
function App() {
  return (
    < >
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/managerUsers' element={<ManagerUser />} />
          <Route path='/managerProducts' element={<ManagerProducts />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
