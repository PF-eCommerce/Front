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
import OrdersPage from "./pages/Admin/Pages/OrdersPage/OrdersPage";
import OrderDetails from "./pages/Admin/Pages/OrdersPage/OrderDetails";
import ProductPage from "./pages/Admin/Pages/productsPage/ProductPage";
import { useSelector } from "react-redux";
import Success from "./pages/Pagos/Success";
import Deny from "./pages/Pagos/Deny";


function App() {
  const user = JSON.parse(localStorage.getItem("auth0"));
  const userRedux = useSelector(state => state.user.user)
  return (
    <div>
      <Navbar />
      <Box>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/detail/:id' element={<Details />} />
          <Route path='/about' element={<About />} />

          <Route path='/sucursales' element={<Sucursales />} />
          <Route path='/register' element={<FormLogin />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/faqs' element={<Preguntas />} />

          <Route path='/cart' element={<ShoppingCart />} />
          <Route path='/buy' element={<Buy />} />
          <Route path='/success' element={<Success />} />
          <Route path='/deny' element={<Deny />} />
          <Route path='*' element={<Error404 />} />
          <Route
            element={
              <ProtectedRoute
                isAllowed={
                 user?.admin.includes("admin")
                }
                redirectTo={"/"}
              />
            }
          >
            <Route path="admin" element={<Admin />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="users" element={<UsersPage />} />
              <Route path="orders" element={<OrdersPage />} />
              <Route path="orders/:id" element={<OrderDetails />} />
              <Route path="products" element={<ProductPage />} />

            </Route>
            {/* ADMIN */}
          </Route>
          <Route
            path='/postproduct'
            element={
              <ProtectedRoute
                isAllowed={
                   user?.admin.includes("admin") 
                }
                redirectTo={"/"}
              >
                <ProductForm />
              </ProtectedRoute>
            }
          >

            {/* ADMIN */}
            <Route path="/postproduct" element={<ProductForm />} />
          </Route>
          <Route
            path='/account/:id/profile'
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
/*
Cosas que faltan implementar o terminar
(Probados en deploy)
Navbar:
-Boton catalogo
-Boton promos
-Busqueda
-Hay que recargar para acceder a admin o perfil

Home:
Error en cards, rompe

Perfil:
Boton cambiar imagen

Cards:
Imagen default, por si una imagen no carga
Favoritos: roto

Admin:
Notificaciones
perfil: solucionado
Dashboard: Terminar

Footer: 
Direcciones, no se usa
Mapa sucursales: no carga
Su cuenta: solucionado
Tus ordenes: no va a ningun lado
tarifas y politicas: no va a ningun lado
devoluciones: no va a ningun lado

Pasarela:
Stripe y Paypal: 
Pagina de compra exitosa(eliminar productos del carrito) y fallida


*/