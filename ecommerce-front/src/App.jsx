import { Box } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import About from "./pages/About/About";
import Form from "./pages/Forms/Form";
import Footer from "./components/Footer/Footer";
import Sucursales from "./pages/Sucursales/Sucursales";


function App() {
  return (
    <div>
      <Navbar />
      <Box>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="/postproduct" element={<Form />} />
          <Route path="/sucursales" element={<Sucursales />} />
          {/* <Route path="/login" element={<Login />}/> */}
        </Routes>
      </Box>
      <Footer />
    </div>
  );
}

export default App;
