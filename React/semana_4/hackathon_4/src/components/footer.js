import styled from "styled-components";
const FooterWrapper = styled.footer`
  background: white;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 45px;
  ul{
    margin: 0;
  }
  ul li{
    display: inline-block;
    margin: 0;
    a{
      i{
        font-size: 15px;
        color: #d2d2d2;
      }
    }
  }


`
const Footer = () => {
  return(
    <FooterWrapper className="App-header">
        <div className="container"> 
        <nav>
          <ul>
            <li>
              <a href="#solution">
              <i className="fas fa-thumbs-up fa-5x"></i>
              </a>
            </li> 
            <li>
              <a href="#solution">
              <i className="fas fa-thumbs-up fa-5x"></i>
              </a>
            </li> 
            <li>
              <a href="#solution">
              <i className="fas fa-thumbs-up fa-5x"></i>
              </a>
            </li> 
            <li>
              <a href="#solution">
              <i className="fas fa-thumbs-up fa-5x"></i>
              </a>
            </li> 
            <li>
              <a href="#solution">
              <i className="fas fa-thumbs-up fa-5x"></i>
              </a>
            </li> 
          </ul>
        </nav>
        </div>
      </FooterWrapper>
  )
}
export default Footer