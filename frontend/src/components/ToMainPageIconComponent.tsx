import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ToMainPageIconComponent = () => {
  return (
    <Link to="/halibet" className="link-router">
      <FontAwesomeIcon icon={faXmark} style={{ fontSize: "2rem" }} />
    </Link>
  );
};

export default ToMainPageIconComponent;
