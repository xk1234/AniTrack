import "./Recommendations.css";
import useGraphql from "../../hooks/useGraphql.js";
import useFetch from "../../hooks/useFetch.js";

const Recommendations = (props) => {
  const processData = (data) => {
    props.showHandler(data.Page.media);
  };

  const query = useGraphql();
  const [error, loading, sendQuery] = useFetch(processData);

  const submitHandler = (e) => {
    e.preventDefault();
    //build request

    sendQuery("https://graphql.anilist.co", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        query: query
      })
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Find Shows</h1>
      <p></p>
      <div className="form-inputs">
        <div className="form-control">
          <label htmlFor="main">What are you looking for?</label>
          <select name="main" id="main">
            <option value="new_viewer">I'm New To Anime & Manga</option>
            <option value="underrated">Looking for something underrated</option>
            <option value="new_viewer">
              I'm looking for an established, long running series
            </option>
          </select>
        </div>
      </div>
      <button className="submit-btn">Get Recommendations</button>
    </form>
  );
};
export default Recommendations;
