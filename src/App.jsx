import "./App.css";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewReleases from "./pages/NewReleases";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./pages/Cart";

import classes from "./pages/Home.module.css";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-releases" element={<NewReleases />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <div className={classes.footerPosition}>
        <Footer />
      </div>
    </>
  );
}

export default App;
