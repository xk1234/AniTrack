import "./StatsBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faBook,
  faClock,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useState } from "react";

const StatsBox = (props) => {
  const [showStat, setShowStat] = useState("anime");
  const showinfo = useSelector((state) => state.show.showinfo);
  let animeprogress = props.anime?.reduce((prev, anime) => {
    return prev + Math.min(showinfo["key" + anime.id].progress, anime.episodes);
  }, 0);
  let mangaprogress = props.manga?.reduce((prev, manga) => {
    return prev + showinfo["key" + manga.id].progress;
  }, 0);
  let timewatched = props.anime?.reduce((prev, anime) => {
    return prev + showinfo["key" + anime.id].progress * anime.duration;
  }, 0);
  let displayed = animeprogress;
  let text = "episodes watched";

  if (showStat === "manga") {
    displayed = mangaprogress;
    text = "chapters read";
  } else if (showStat === "time") {
    displayed = Math.floor(+timewatched / 60);
    text = "hours watched";
  } else if (showStat === "favorited") {
    displayed = 0;
    text = "favorited shows";
  }

  const animeHandler = () => {
    setShowStat("anime");
  };
  const mangaHandler = () => {
    setShowStat("manga");
  };
  const timeHandler = () => {
    setShowStat("time");
  };
  const favoritedHandler = () => {
    setShowStat("favorited");
  };

  return (
    <section className="stats-box">
      <div className="stats-tr">
        <button
          onClick={animeHandler}
          className={showStat === "anime" ? "active" : ""}
        >
          <FontAwesomeIcon icon={faVideo} className="list-icon" />
        </button>
        <button
          onClick={mangaHandler}
          className={showStat === "manga" ? "active" : ""}
        >
          <FontAwesomeIcon icon={faBook} className="list-icon" />
        </button>
        <button
          onClick={timeHandler}
          className={showStat === "time" ? "active" : ""}
        >
          <FontAwesomeIcon icon={faClock} className="list-icon" />
        </button>
        <button
          onClick={favoritedHandler}
          className={showStat === "favorited" ? "active" : ""}
        >
          <FontAwesomeIcon icon={faHeart} className="list-icon" />
        </button>
      </div>
      <h1>{displayed ?? 0}</h1>
      <p>{text}</p>
    </section>
  );
};
export default StatsBox;
