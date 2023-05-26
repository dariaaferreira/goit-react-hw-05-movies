import { MdArrowBackIos } from 'react-icons/md';
import { Link } from "react-router-dom";

export const BackLink = ({ goBackLink  }) => {
  return (
    <Link to={goBackLink}>
      <MdArrowBackIos size="24" />
      Go back
    </Link>
  );
};
