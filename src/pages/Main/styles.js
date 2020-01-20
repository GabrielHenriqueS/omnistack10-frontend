import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  margin-left: 30px;
  @media (max-width: 1000px){
    margin-left: 0;
    margin-top: 30px;
  }
  ul{
    display: grid;
    grid-template-columns: repeat(2,1fr); 
    gap: 20px;
    list-style: none;
    @media (max-width: 570px){
      grid-template-columns: 1fr;
    }
    }
 }
`;
