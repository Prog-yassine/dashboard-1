import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Employee from "./pages/employee";


import SideBar from "./components/sidebar";

function App() {
  return (
    <BrowserRouter>
    <div className="w-full bg-black h-[100vh] flex flex-row">
        <SideBar/>
        <div className="w-[calc(100%-301px)] bg-gray-100 h-full">
            <Routes>
                <Route>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="employee" element={<Employee />} />
                </Route>
            </Routes>
        </div>
    </div>
      
    </BrowserRouter>
  );
}

export default App;
