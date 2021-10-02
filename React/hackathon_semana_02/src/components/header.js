import logo from "../logo.svg";

const Header = () => {
  return(
    <header className="App-header">
        <div className="container">
          
        <img width="50" src={logo} className="App-logo" alt="logo" />
        <nav>
          <ul>
            <li>
              <a href="#solution">Solution</a>
            </li>
            <li>
              <a href="#Partners">Partners</a>
            </li>
            <li>
              <a href="#Patient">Patient</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
        </div>
      </header>
  )
}
export default Header