import styled from "@emotion/styled";

export const SearchFormBar = styled.form`
    display: flex;
    align-items: center;
    width: 300px;
    height: 40px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
`;
  
export const SearchFormButton =  styled.button`
    display: inline-block;
    margin-left: 5px;
    width: 60px;
    height: 40px;
    border: 0;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;

    &:hover {
      opacity: 1;
    }
`;

export const SearchFormInput =  styled.input`
    display: inline-block;
    width: 200px;
    height: 35px;
    font: inherit;

    border: 1px black solid;
    padding-left: 4px;
    padding-right: 4px;
`;