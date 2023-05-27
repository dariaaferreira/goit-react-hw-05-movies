import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieWrapper = styled.div`
  margin: 20px 40px;
`;

export const LinkList = styled.ul`
  display: flex;
`;

export const LinkItem = styled.li`
  list-style: none;
  margin-left: 15px;
  &:not(:last-child) {
    margin-left: 0;
  }
`;

export const LinkStyled = styled(NavLink)`
    text-decoration: none;
    position: relative;
    margin-top: 20px;
    margin-bottom: 50px;
    display: inline-flex;
    padding: 10px 28px;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.88;
    letter-spacing: 0.06em;
    color: white;
    background-color: rgb(0 102 183);
    cursor: pointer;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    font-family: inherit;

    &:hover, &:focus {
    cursor: pointer;
    background-color: #2196F3;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
`;

export const Overview = styled.p`
  width: 600px;
`;