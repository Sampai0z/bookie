import "./App.css";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewReleases from "./pages/NewReleases";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-releases" element={<NewReleases />} />
          {/* <Route path="/favorites" element={<FavoritesPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
