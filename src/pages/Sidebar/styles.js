import styled from 'styled-components';

export const Container = styled.div`
  aside{
    width: 320px;
    background: #fff;
    box-shadow: 0 0 14px 0 rgba(0,0,0,0.02);
    border-radius: 2px;
    padding: 30px 20px; 

    strong{
      font-size: 20px;
      text-align: center;
      display: block;
      color: #333;
    }
  }
  @media (max-width: 1000px){
    width: 100%;
    aside{
      width: 100%;
    }
  }
`;
