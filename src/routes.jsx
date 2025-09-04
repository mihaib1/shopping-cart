import App from "./App"
import About from "./pages/About"
import Products from "./pages/Products"
import ErrorPage from "./pages/ErrorPage"
import Cart from "./pages/Cart"
import Profile from "./pages/Profile"
import Home from "./pages/Home"

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "products",
    element: <Products />
  },
  {
    path: "cart",
    element: <Cart />
  },
  {
    path: "profile",
    element: <Profile />
  }
];

export default routes;