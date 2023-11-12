// import harryImage from "../assets/harry.jpg";
import loading from "../assets/loading.png";

import PropTypes from "prop-types";
import classes from "./Books.module.css";
import Placeholder from "react-bootstrap/Placeholder";

export default function Book(props) {
  return (
    <>
      {(
        <div className={classes.book}>
          <img src={loading} alt="..." width={150} height={200} />
          <Placeholder animation="glow">
            <Placeholder xs={11} />
          </Placeholder>
          <p className={classes.author}>
            {" "}
            <Placeholder xs={11} />
          </p>
          <div className={classes.price}>
            {" "}
            <Placeholder xs={3} />
            <button className={classes.buy}>
              {" "}
              <Placeholder xs={11} />
            </button>
          </div>
        </div>
      ) && (
        <div className={classes.book}>
          <img src={props.image} alt="..." width={150} />
          <h6 className="mt-1">{props.title}</h6>
          <p className={classes.author}>{props.author}</p>
          <div className={classes.price}>
            <span>$17</span>
            <button className={classes.buy}>{props.votes}</button>
          </div>
        </div>
      )}
    </>
  );
}
// Adicione validação de tipo usando PropTypes
Book.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  votes: PropTypes.number.isRequired, // Exige que 'votes' seja um número e seja obrigatório
};
