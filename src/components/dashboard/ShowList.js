import Pages from "./Pages";
import "./ShowList.css";

const ShowList = (props) => {
  return (
    <section>
      <div className="sl-nav">
        <div className="sl-top">
          <h1>My Shows</h1>
          <select name="" id="" className="sl-select">
            <option value="all">All Shows</option>
            <option value="watching">Watching</option>
          </select>
        </div>
        <div className="sl-next">
          <input type="text" className="sl-search" placeholder="Search Shows" />
          <h4>26 shows</h4>
        </div>
      </div>
      <div className="sl-shows"></div>
      <Pages perPage={3} numItems={30} />
    </section>
  );
};
export default ShowList;
