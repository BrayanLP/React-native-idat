import logo from '../logo.svg';
import styled from 'styled-components'

const HeaderWrapper= styled.header`
position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100%;
  background-color: #9543f0;
  padding: 50px 0px;
  span, h1{
    color: white;
    padding: 0 20px;
  }
`;

const List = styled.ul`
  background-color: orange;
  li{
    list-style: none;
  }
  li a{
    color: white;
    text-decoration: none;
    display: block;
    padding: 15px 30px;
    font-size: 20px; 
    border-radius: 40px 0 0 40px;
    margin-bottom: 10px;
    text-align: left;
    &:hover{
      background: rgba(255,255,255,0.2);

    }
  }

`;
const Header = () =>{
  return(
    <HeaderWrapper>
      <span>
        We love By
      </span>
      <h1>
       The Design Process
      </h1>
      <List>
        <li>
          <a href="/">{'->'}</a>
        </li>
        
      </List>
    </HeaderWrapper>
  )
}

export default Header;