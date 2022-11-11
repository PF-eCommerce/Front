import {Box} from "@mui/material"
import Navbar from "./components/Navbar/Navbar";
// import Cards from "./components/Cards/Cards";
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from "./pages/Landing/Landing";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Box>
      
        <Navbar/>
        <Landing/>
        
        
      
      </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
