import "./ShowPic.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const ShowPic = (props) => {
  const show = props.show;

  return (
    <div className="show-pic">
      <img src={show.coverImage.large} />
      <div className="show-icon">
      <FontAwesomeIcon icon={faBook} size="xl" className="list-icon" />
      </div>
    </div>
  );
};
export default ShowPic;
