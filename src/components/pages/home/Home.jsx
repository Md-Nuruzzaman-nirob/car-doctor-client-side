import AboutUs from "./about/AboutUs";
import Banner from "./banner/Banner";
import ContactUs from "./contact/ContactUs";
import Products from "./products/Products";
import ServiceHome from "./service/ServiceHome";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <ServiceHome></ServiceHome>
      <ContactUs></ContactUs>
      <Products></Products>
    </div>
  );
};

export default Home;
