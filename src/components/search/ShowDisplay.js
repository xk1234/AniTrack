import './ShowDisplay.css'
import ShowPic from './ShowPic'

const ShowDisplay = (props) => {

  const shows = props.shows
  return (
    <div className="show-display">
      {shows.map(show=> <ShowPic show={show} />)}
    </div>
  );
};
export default ShowDisplay;