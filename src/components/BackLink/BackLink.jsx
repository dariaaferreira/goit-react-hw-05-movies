import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

export const BackLink = ({ goBackLink  }) => {
  return (
    <Link to={goBackLink}>
      <HiArrowLeft size="24" />
      Go back
    </Link>
  );
};
