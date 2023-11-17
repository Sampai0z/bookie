/* eslint-disable react/no-unknown-property */
import Carrousel from "../components/Carrousel";
import { Book, LoadingBooks } from "../components/Books.jsx";
import { useEffect, useState } from "react";
import classes from "./Home.module.css";
import { Container, Row, Col } from "react-bootstrap";

//DUMMY DATA
import data from "../assets/data.json";

export default function Home() {
  const [books, setbooks] = useState([]);
  const bgCarousel = {
    backgroundColor: "gray",
  };

  useEffect(() => {
    // const url = "https://hapi-books.p.rapidapi.com/nominees/romance/2023";
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "X-RapidAPI-Key": "bb9c2a3ba0msh8e037f489dcc2a9p1f4b97jsn64febbd970b6",
    //     "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
    //   },
    // };
    async function fetchData() {
      try {
        // const response = await fetch(url, options);
        // const data = await response.json();
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
        <Container>
          <Row>
            <Col>
              <Carrousel />
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col className="mt-4">
            <h1 align="center">Our recommendations</h1>
          </Col>
          <Col className="mt-4">
            <div className={classes.lineBook}>
              {Array.isArray(books) && books.length > 0 ? (
                books.map((book) => (
                  <Book
                    key={book.book_id}
                    title={book.title}
                    image={book.image}
                    price={book.price}
                    author={book.author}
                  />
                ))
              ) : (
                <>
                  <LoadingBooks />
                  <LoadingBooks />
                  <LoadingBooks />
                  <LoadingBooks />
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
