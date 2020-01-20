import styled from 'styled-components';

export const Container = styled.div`
form{
  margin-top: 30px;
  
  div.input-block label{
    color: #ACACAC;
    font-size: 14px;
    font-weight: bold;
    display: block;
  }
  div.input-block input{
    width: 100%;
    height: 32px;
    font-size: 14px;
    color: #666;
    border: 0;
    border-bottom: 1px solid #eee;
  }

  div.input-block + &{
    margin-top: 20px
  }

  div.input-group{
    margin-top: 20px;
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
  }

  button[type=submit]{
    width: 100%;
    border: 0;
    margin-top: 30px;
    background: #7d40e7;
    border-radius: 2px;
    padding: 15px 20px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    transition: background 0.5s;
    &:hover{
      background: #6931ca;
    }
  }
}
`;
