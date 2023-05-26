import styled from "@emotion/styled";

export const MovieCards = styled.ul`
  display: grid;
  max-width: calc(100vw - 60px);
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;