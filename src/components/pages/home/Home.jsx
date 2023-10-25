import { useLoaderData } from "react-router-dom";
import AboutUs from "./about/AboutUs";
import Banner from "./banner/Banner";
import ContactUs from "./contact/ContactUs";
import Products from "./products/Products";
import ServiceHome from "./service/ServiceHome";

const Home = () => {
  const services = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <ServiceHome services={services}></ServiceHome>
      <ContactUs></ContactUs>
      <Products></Products>
    </div>
  );
};

export default Home;
