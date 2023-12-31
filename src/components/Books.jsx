import loading from "../assets/loading.png";
import PropTypes from "prop-types";
import classes from "./Books.module.css";
import Placeholder from "react-bootstrap/Placeholder";

export const Book = (props) => {
  return (
    <>
      <div className={classes.book}>
        <img src={props.image} alt="..." width={120} />
        <h6 className="mt-1">{props.title}</h6>
        <p className={classes.author}>{props.author}</p>
        <div className={classes.price}>
          <span>{props.price}</span>
          <button className={classes.buy}>Buy</button>
        </div>
      </div>
    </>
  );
};

export const LoadingBooks = () => {
  return (
    <>
      <div className={classes.book}>
        <img src={loading} alt="..." width={150} height={200} />
        <Placeholder animation="glow">
          <Placeholder xs={11} />
        </Placeholder>
        <p className={classes.author}>
          <Placeholder animation="glow">
            <Placeholder xs={11} />
          </Placeholder>
        </p>
        <div className={classes.price}>
          <Placeholder xs={4} />
          <button className={classes.buy}>
            <Placeholder animation="glow">
              <Placeholder xs={11} />
            </Placeholder>
          </button>
        </div>
      </div>
      ;
    </>
  );
};

// Adicione validação de tipo usando PropTypes
Book.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  price: PropTypes.number.isRequired, // Exige que 'votes' seja um número e seja obrigatório
};
