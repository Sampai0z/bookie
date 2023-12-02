/* eslint-disable react/no-unknown-property */
import Carrousel from "../components/Carrousel";
import { Book, LoadingBooks } from "../components/Books.jsx";
import Footer from "../components/Footer.jsx";
import { useEffect, useState } from "react";
import classes from "./Home.module.css";
import { Container, Row, Col } from "react-bootstrap";

//DUMMY DATA
import data from "../assets/data.json";

export default function Home() {
  const [books, setbooks] = useState([]);

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

  const renderBooks = () => {
    return books.map((book) => (
      <Book
        key={book.id}
        title={book.title}
        image={book.image}
        price={book.price}
        author={book.author}
      />
    ));
  };

  const renderLoadingBooks = () =>
    Array(4)
      .fill()
      .map((_, index) => <LoadingBooks key={index} />);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Carrousel />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className="mt-4">
            <h1 align="center">Our recommendations</h1>
          </Col>
          <Col className="mt-4">
            <div className={classes.lineBook}>
              {Array.isArray(books) && books.length > 0
                ? renderBooks()
                : renderLoadingBooks()}
            </div>
          </Col>
          <Col className="mt-4">
            <div className={classes.lineBook}>
              {Array.isArray(books) && books.length > 0
                ? renderBooks()
                : renderLoadingBooks()}
            </div>
          </Col>
          <Col className="mt-4">
            <div className={classes.lineBook}>
              {Array.isArray(books) && books.length > 0
                ? renderBooks()
                : renderLoadingBooks()}
            </div>
          </Col>
        </Row>
      </Container>
      <div className={classes.footerPosition}>
        <Footer />
      </div>
    </>
  );
}
