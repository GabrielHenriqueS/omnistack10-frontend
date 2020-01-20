import styled from 'styled-components';

export const Container = styled.div`
li.dev-item{
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0,0,0,0.02);
  border-radius: 2px;
  padding: 20px;
  header{
    display: flex;
    flex-direction: row;
    align-items: center;
    div.user-info{
      margin-left: 10px;
      strong{
        display: block;
        font-size: 16px;
        color: #333;
      }
      span{
        font-size: 13px;
        color: #999;
        margin-top: 2px;
      }
    }
    img{
      width: 54px;
      height: 54px;
      border-radius: 50%;
    }
  }
  p{
    color: #666;
    font-size:14x;
    line-height: 20px;
    margin: 10px 0;
  }
  a{
    color: #8e4dff;
    font-size: 14px;
    text-decoration:none;
    &:hover{
      color: #5a2ea6;
    }
  }
`;
