import "./RelatedMedia.css";
import { Fragment } from "react";
import { Link } from "react-router-dom";
const RelatedMedia = (props) => {
  return (
    <Fragment>
      <h2>Related Media</h2>
      <div className="related-display">
        {props.related?.nodes?.map((rShow) => (
          <div className="related-show">
            <img
              key={rShow.id}
              src={rShow.coverImage.extraLarge}
              alt={rShow.title.english}
            />
            <Link to={`/detail/${rShow.id}`}></Link>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default RelatedMedia;
