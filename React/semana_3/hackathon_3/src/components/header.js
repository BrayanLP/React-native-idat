import logo from "../logo.svg";
import styled from "styled-components";
const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2c66c2;
  // padding: 0 1%; 
  margin: 0 auto;
  padding: 0 5%;
  box-sizing: border-box;
  z-index: 9;
  span,
  h1 {
    color: white;
    // padding: 0 20px;
  }
`;

const List = styled.ul`
  // background-color: orange;
  padding: 0;
  margin: 0;
  li {
    list-style: none;
    display: inline-block;
  }
  li a {
    color: white;
    text-decoration: none;
    display: block;
    padding: 15px 30px;
    font-size: 20px;
    border-radius: 40px 0 0 40px;
    margin-bottom: 10px;
    text-align: left;
    margin: 0;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;
const Header = () => {
  return (
    <header>
      <HeaderWrapper>
        <img width="60" src={logo} alt="" />
        <List>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Nosotros</a>
          </li>
          <li>
            <a href="/">Proyectos</a>
          </li>
          <li>
            <a href="/">Contacto</a>
          </li>
        </List>
      </HeaderWrapper>
    </header>
  );
};

export default Header;
