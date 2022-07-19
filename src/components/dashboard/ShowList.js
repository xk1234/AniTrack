import ShowPic from "../search/ShowPic";
import Pages from "./Pages";
import "./ShowList.css";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const ShowList = (props) => {
  const { height, width } = useWindowDimensions();
  let perPage = 3;
  if (width < 800) {
    perPage = 3;
  } else {
    perPage = 5;
  }
  const [displayedStart, setDisplayedStart] = useState(0);
  const [displayedEnd, setDisplayedEnd] = useState(perPage);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(props.shows);

  const pageHandler = (start, end) => {
    setDisplayedStart(start);
    setDisplayedEnd(end);
  };

  const changeHandler = (e) => {
    let searchterm = e.target.value.toLowerCase();
    setSearch(searchterm);
    setFiltered(
      props.shows.filter((show) => {
        return (
          show.title?.english?.toLowerCase()?.includes(searchterm) ||
          show.title?.romaji?.toLowerCase()?.includes(searchterm)
        );
      })
    );
  };

  const filterHandler = (e) => {
    if (e.target.value === "all") {
      setFiltered(props.shows);
    } else if (e.target.value === "watching") {
      setFiltered(
        props.shows.filter((show) => {
          return Math.max(show.chapters, show.episodes) > show.progress;
        })
      );
    } else if (e.target.value === "completed") {
      setFiltered(
        props.shows.filter((show) => {
          return show.progress > Math.max(show.chapters, show.episodes);
        })
      );
    }
  };

  useEffect(() => {
    setFiltered(props.shows);
  }, [props.shows]);

  return (
    <section>
      <div className="sl-nav">
        <div className="sl-top">
          <h1>My Shows</h1>
          <select name="" id="" className="sl-select" onChange={filterHandler}>
            <option value="all">All Shows</option>
            <option value="watching">Watching</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="sl-next">
          <input
            type="text"
            className="sl-search"
            placeholder="Search Shows"
            value={search}
            onChange={changeHandler}
          />
          <h4>{filtered.length} shows</h4>
        </div>
      </div>
      <div className="sl-shows">
        {filtered.slice(displayedStart, displayedEnd).map((show) => (
          <ShowPic show={show} key={show.id} />
        ))}
      </div>
      <Pages
        perPage={perPage}
        numItems={filtered.length}
        onPageChange={pageHandler}
      />
    </section>
  );
};
export default ShowList;
