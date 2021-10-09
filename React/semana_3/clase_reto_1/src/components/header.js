import logo from '../logo.svg';
const Header = () =>{
  return(
    <header>
      <h1>
        <a href="/">
          <img width='90' src={logo} alt="logo" />
        </a>
      </h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </header>
  )
}

export default Header;