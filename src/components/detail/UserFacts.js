import "./UserFacts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCheck, faEye } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const UserFacts = (props) => {
  const showinfo = useSelector((state) => state.show.showinfo);

  let badge = (
    <div className="badge">
      <p>No Status</p>
    </div>
  );

  if (showinfo["key" + props.id]) {
    let progress = showinfo["key" + props.id].progress;
    if (progress > props.num && props.num !== 0) {
      //status completed
      badge = (
        <div className="badge success">
          <p>
            <FontAwesomeIcon icon={faCheck} size="1x" className="list-icon" />{" "}
            Completed
          </p>
        </div>
      );
    } else if (props.num > progress && progress > 0) {
      badge = (
        <div className="badge watching">
          <p>
            <FontAwesomeIcon icon={faEye} size="1x" className="list-icon" />{" "}
            Watching {progress}/{props.num}
          </p>
        </div>
      );
    } else if (progress === 0) {
      badge = (
        <div className="badge primary">
          <p>Plan To Watch</p>
        </div>
      );
    } else {
      badge = (
        <div className="badge">
          <p>Progress: {progress}</p>
        </div>
      );
    }
  }

  return (
    <div className="user-facts">
      <h1 className="desktop-hidden">{props.title}</h1>
      <img src={props.showPic?.extraLarge} alt={props.title} />
      {badge}
      <button className="favorites">
        <FontAwesomeIcon icon={faHeart} size="1x" className="list-icon" />
        Add To Favorites
      </button>
    </div>
  );
};
export default UserFacts;
