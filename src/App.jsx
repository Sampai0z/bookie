import "./App.css";
import Header from "./components/header";
import { BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/new-meetup" element={<NewMeetupsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
