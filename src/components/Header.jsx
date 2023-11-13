import { Link, useNavigate } from "react-router-dom";
import classes from "./Header.module.css";

export default function Header() {
  const navigate = useNavigate();

  const handlerCart = () => {
    console.log("1");
    navigate("/cart");
  };

  return (
    <nav>
      <div className={classes.teste}>
        <div>
          <h1 className={classes.title}>
            <Link className={classes.heading} to="/">
              Bookie
            </Link>
          </h1>
        </div>
        <div className={classes.teste}>
          <input
            type="text"
            placeholder="Search.."
            className={classes.searchBar}
          />
          <button className={classes.searchBarButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        <div className={classes.teste}>
          <button className={classes.cart} onClick={handlerCart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.6}
              stroke="currentColor"
              className="w-2.5 h-2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <div>$35.19</div>
          </button>
        </div>
      </div>

      <hr />

      <div>
        <ul className={`${classes.teste} ${classes.lista}`}>
          <li>
            <Link className={classes.lista} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={classes.lista} to="/new-releases">
              New releases
            </Link>
          </li>
          <li>
            <Link className={classes.lista} to="/recomendations">
              Recomendations
            </Link>
          </li>
          <li>
            <Link className={classes.lista} to="/">
              Books
            </Link>
          </li>
          <li>
            <Link className={classes.lista} to="/favorites">
              <div className={classes.sale}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-2.5 h-2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6h.008v.008H6V6z"
                  />
                </svg>
                SALE
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
