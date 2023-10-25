import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const Root = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-gray-300 font-Ubuntu">
      <header className="max-w-7xl mx-5 md:mx-10 xl:mx-auto">
        <Navbar></Navbar>
      </header>
      <main className="max-w-7xl mx-5 md:mx-10 xl:mx-auto">
        <Outlet></Outlet>
      </main>
      <footer className="bg-black">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
