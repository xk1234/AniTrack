import "./RelatedMedia.css";
import { Fragment } from "react";
const RelatedMedia = (props) => {
  return (
    <Fragment>
      <h2>Related Media</h2>
      <div className="related-display">
        {props.related?.nodes?.map((rShow) => (
          <img
            key={rShow.id}
            src={rShow.coverImage.large}
            alt={rShow.title.english}
          />
        ))}
      </div>
    </Fragment>
  );
};
export default RelatedMedia;
