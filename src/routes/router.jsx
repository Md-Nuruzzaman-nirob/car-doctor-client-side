import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layout/Root";
import Home from "../components/pages/home/Home";
import ErrorPage from "../components/pages/error/ErrorPage";
import About from "../components/pages/about/About";
import Services from "../components/pages/services/Services";
import Blog from "../components/pages/blog/Blog";
import Contact from "../components/pages/contact/Contact";
import Cart from "../components/pages/cart/Cart";
import ServiceDetails from "../components/pages/info/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/service/details/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: () => fetch("/services.json"),
      },
    ],
  },
]);

export default router;
