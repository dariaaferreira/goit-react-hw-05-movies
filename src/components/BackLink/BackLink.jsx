import { HiArrowLeft } from "react-icons/hi";
import { StyledLink } from "./BackLink.styled";

export const BackLink = ({ goBackLink  }) => {
  return (
    <StyledLink to={goBackLink}>
      <HiArrowLeft size="24" />
      Go back
    </StyledLink>
  );
};
