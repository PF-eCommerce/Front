import { Box } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import About from "./pages/About/About";
import ProductForm from "./pages/Forms/Product/ProductForm";
import Footer from "./components/Footer/Footer";
import Sucursales from "./pages/Sucursales/Sucursales";
import Preguntas from "./pages/Preguntas/Preguntas";
import Auth from "./pages/Forms/Auth/FormAuth";
import Profile from "./pages/Profile/Profile";
import FormLogin from "./pages/Forms/FormLogin";
import ShoppingCart from "./components/Cart/ShoppingCart";
import Admin from "./pages/Admin/Admin";
import UsersPage from "./pages/Admin/Pages/UsersPage/UsersPage";
import Dashboard from "./pages/Admin/Pages/Dashboard/Dashboard";
import Buy from "./pages/Forms/Buy/BuyForm";
import { ProtectedRoute } from "./utils/protectedRoutes/ProtectedRoutes";
import Error404 from './components/Error404/Error404'

function App() {
  const user = JSON.parse(localStorage.getItem("auth0"));
  return (
    <div>
      <Navbar />
      <Box>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="/sucursales" element={<Sucursales />} />
          <Route path="/register" element={<FormLogin />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/faqs" element={<Preguntas />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/buy" element={<Buy />} />
          {/* // admin Routes */}
          <Route
            element={
              <ProtectedRoute
                isAllowed={user && user.length>0 && user.admin?.includes("admin")}
                redirectTo={"/"}
              />
            }
          >
            <Route path="admin" element={<Admin />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="users" element={<UsersPage />} />
            </Route>
            {/* ADMIN */}
            <Route path="/postproduct" element={<ProductForm />} />
          </Route>
          <Route
            path="/account/profile"
            element={
              <ProtectedRoute isAllowed={user} redirectTo={"/"}>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Box>
      <Footer />
    </div>
  );
}

export default App;
