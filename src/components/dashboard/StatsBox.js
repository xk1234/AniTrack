import "./StatsBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faBook,
  faClock,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

const StatsBox = (props) => {
  return (
    <section className="stats-box">
      <div className="stats-tr">
        <button className="active">
          <FontAwesomeIcon icon={faVideo} className="list-icon" />
        </button>
        <button>
          <FontAwesomeIcon icon={faBook} className="list-icon" />
        </button>
        <button>
          <FontAwesomeIcon icon={faClock} className="list-icon" />
        </button>
        <button>
          <FontAwesomeIcon icon={faHeart} className="list-icon" />
        </button>
      </div>
      <h1>532</h1>
      <p>episodes watched</p>
    </section>
  );
};
export default StatsBox;
