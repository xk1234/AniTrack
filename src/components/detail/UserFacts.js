import "./UserFacts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCheck } from "@fortawesome/free-solid-svg-icons";

const UserFacts = (props) => {
  return (
    <div className="user-facts">
      <h1 className="desktop-hidden">{props.title}</h1>
      <img src={props.showPic?.large} alt={props.title} />
      <div className="badge">
        <p>
          <FontAwesomeIcon icon={faCheck} size="1x" className="list-icon" />{" "}
          Completed
        </p>
      </div>
      <button className="favorites">
        <FontAwesomeIcon icon={faHeart} size="1x" className="list-icon" />
        Add To Favorites
      </button>
    </div>
  );
};
export default UserFacts;
