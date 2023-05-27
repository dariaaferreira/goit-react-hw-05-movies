import styled from 'styled-components';

export const ReviewList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 0 30px;
  margin: 0 40px;
`;

export const ReviewItem = styled.li`
    list-style: none;
    background-color: rgb(185 181 181 / 17%);
    width: 1200px;
    border-radius: 4px;
`;

export const ReviewAuthor = styled.p`
    padding: 0 20px;
    text-decoration: underline;
`;

export const ReviewDescr = styled.p`
    padding: 0 20px;
`;