/* eslint-disable react/no-unknown-property */
import Carrousel from "../components/Carrousel";
import Book from "../components/Books.jsx";
import { useEffect, useState } from "react";
import classes from "./Home.module.css";
import "swiper/swiper-bundle.css";

export default function Home() {
  const [books, setbooks] = useState([]);
  const bgCarousel = {
    backgroundColor: "gray",
  };

  useEffect(() => {
    const url = "https://hapi-books.p.rapidapi.com/nominees/romance/2020";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "bb9c2a3ba0msh8e037f489dcc2a9p1f4b97jsn64febbd970b6",
        "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
      },
    };
    async function fetchData() {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setbooks(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

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
              {Array.isArray(books) &&
                books.map((book) => (
                  <Book
                    key={book.book_id}
                    title={book.name}
                    image={book.cover}
                    votes={book.votes}
                    author={book.author}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
