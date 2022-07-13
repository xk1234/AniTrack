import { useParams } from "react-router";
import "./Pages.css";

const Detail = (props) => {
  let params = useParams();
  return (
    <div>
      <h1>Detail {params.mediaId}</h1>
    </div>
  );
};
export default Detail;
