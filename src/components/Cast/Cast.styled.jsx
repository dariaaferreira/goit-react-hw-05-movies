import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;


export const CastItem = styled.li`
    list-style: none;
    width: 150px;
    border-radius: 4px;
    border: 1px #80808040 solid;
`;

export const CastImg = styled.img`
    width: 100%;
    height: 200px;
    border-radius: 4px 4px 0 0;
`;

export const CastDescr = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  
`;

export const CastText = styled.p`
  margin: 0;
  padding: 5px;
`;
