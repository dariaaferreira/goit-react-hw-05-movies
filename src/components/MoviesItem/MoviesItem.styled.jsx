import styled from 'styled-components';

export const MovieItem = styled.li`
  width: 400px;
  border-radius: 10px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:hover {
  transform: scale(1.03);
  }
`;

export const MovieImg = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const MovieTitle = styled.h3`
  padding: 10px;
  font-size: 20px;
  color: black;
`;