import styled from "@emotion/styled";

export const SearchFormBar = styled.form`
    display: flex;
    align-items: center;
`;
  
export const SearchFormInput =  styled.input`
    width: 300px;
    height: 28px;
    margin-bottom: 30px;
    background-color: transparent;
    border: 1px solid rgb(0 102 183 / 43%);
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 10px;
    font-size: 16px;
    line-height: 1.2;
    cursor: pointer;
    &:focus-visible {
        border: 1px solid rgb(0 102 183);
    }
`;

export const SearchFormButton =  styled.button`
    position: relative;
    height: 50px;
    margin-top: 20px;
    margin-left: 10px;
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