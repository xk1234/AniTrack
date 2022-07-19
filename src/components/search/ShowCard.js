import "./ShowCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faVideo } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];
const ShowCard = (props) => {
  const show = props.show;

  return (
    <div className="show-card">
      <img src={show.coverImage.large} />
      <div className="show-details">
        <h4>{show.title.english ?? show.title.romaji}</h4>
        <div className="mid-row">
          <FontAwesomeIcon
            icon={show.type === "ANIME" ? faVideo : faBook}
            size="1x"
            className="list-icon"
          />
          <span className="badge">Score: {show.averageScore}</span>
          <span className="badge">
            Ended: {months[show.endDate.month - 1]} {show.endDate.year}
          </span>
        </div>
        <p>{ReactHtmlParser(show?.description?.substring(0, 200)) + "..."}</p>
      </div>
      <Link to={`/detail/${show.id}`}></Link>
    </div>
  );
};

export default ShowCard;
