/* eslint-disable react/no-unknown-property */
import Carrousel from "../components/Carrousel";
import Book from "../components/Books.jsx";
import classes from "./Home.module.css";

export default function Home() {
  const bgCarousel = {
    backgroundColor: "gray",
  };

  return (
    <>
      <div style={bgCarousel}>
        <div className={"container"}>
          <div className={"row"}>
            <div className="col-md-12">
              <Carrousel />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-4">
            <h1 align="center">Our recommendations</h1>
          </div>
          <div className="mt-4">
            <div className={classes.lineBook}>
              <Book />
              <Book />
              <Book />
              <Book />
              <Book />
              <Book />
              <Book />
              <Book />
              <Book />
              <Book />
              <Book />
              <Book />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
