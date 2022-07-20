import "./Pages.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const HomePage = (props) => {
  return (
    <div className="homepage">
      <div className="homepage-left">
        <h1>Track and discover new shows</h1>
        <div className="call-to-action">
          <Link to="/search" className="button">
            <FontAwesomeIcon icon={faSearch} size="1x" className="list-icon" />
            Find A Show
          </Link>
          <Link to="/sign-up" className="button">
            Sign Up, Its Free!
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
