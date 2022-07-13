import "./Pages.css";
import Recommendations from "../components/search/Recommendations";
import ShowDisplay from "../components/search/ShowDisplay";
import { useState } from "react";

const Search = (props) => {
  const [shows, setShows] = useState([]);

  const showHandler = (allshows) => {
    setShows(allshows);
  };

  return (
    <div className="search">
      <Recommendations showHandler={showHandler} />
      <ShowDisplay shows={shows} />
    </div>
  );
};
export default Search;
