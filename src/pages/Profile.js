import "./Profile.css";
import { Link } from "react-router-dom";
import ShowPic from "../components/search/ShowPic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Profile = (props) => {
  return (
    <div>
      <h1>Profile</h1>
      <div className="profile-area">
        <img
          src="https://i.pinimg.com/736x/25/78/61/25786134576ce0344893b33a051160b1.jpg"
          alt=""
          className="profilepic"
        />
        <div className="profile-info">
          <p>
            Username:
            <br /> YXK
          </p>
          <p>
            Email: <br /> yxk1234@gmail.com
          </p>
          <Link to="/" className="button nav-mobile">
            Edit Profile
          </Link>
        </div>
      </div>
      <h2>
        Favorites{" "}
        <FontAwesomeIcon icon={faStar} size="1x" className="list-icon" />
      </h2>
    </div>
  );
};
export default Profile;
