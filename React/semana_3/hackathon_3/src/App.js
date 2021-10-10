import './App.css';
import Header from './components/header';
import Dashboard from './views/dashboard';
import styled from "styled-components";
import fondo from './assets/fondo.png';
import aside from './assets/aside.jpeg'
const Banner = styled.div`
  width: 100%;
  height: 400px;
  background: #2c66c2;
  // margin-bottom: 65px;
  // box-shadow: 0 0 10px rgba(0,0,0,0.5);
  padding: 150px 5% 0 5%;
  box-sizing: border-box;
  z-index: 2;
  position: relative;
  img{
    width: 100%;
    max-width: 300px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.5); 
    border-radius: 5px;
  }
  .row{
    display: grid;
    grid-template-columns: 400px 1fr;
    align-items: center;
    justify-items: center;
  }
  h2{
    font-size: 40px;
    color: white;
  }
  p{
    color: white;
  }
  .btn{
    background: #f4ca5b;
    color: #2c66c2;
    padding: 0 2rem;
    height: 50px;
    border-radius: 30px;
    border: none;
    font-weight: bold;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
  .line{
    height: 1px;
    width: 100%;
    display: block;
    background: white;
    margin: 1rem 0;
  }
  ul.inline{
    margin: 0;
    padding: 0;
    li{
      display: inline-block;
      a{
        color: white;
        margin: 0 20px;
        text-decoration: none;
      }
    }
  }
`;

const AppWrapper = styled.div` 
  
`;

const WrapperBlog =  styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  padding: 0 5%;
  gap: 20px;
  aside{
    background: white;
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    padding: 0 1rem;
  }
`;

const Card = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(0,0,0,0.4);
  padding: 10px 1rem;
  margin-top: 10px;
  margin-bottom: 15px;
  img{
    width: 70px;
  }
  h5{
    padding: 0 1rem;
  }
`;

const Card2 = styled.div`
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
  background: white;
  padding: 1rem;
  box-sizing: border-box;
  margin: 15px 50px 40px 50px;
  .cont-header{
    display: flex;
    img{
      position: relative;
      top: -30px;
      left: -30px;
    }
    h5{
      width: 100%; 
      font-size: 18px;
    }
  }
  .cont-info{
    .align{
      display: flex;
      align-items: center;
    }
    span{
      line-height: 25px;
      margin-right: 10px;
    }
    .circle{
      width: 25px;
      height: 25px;
      background: #2c66c2;
      display: inline-block;
      border-radius: 50%;
    }
  }
  .line{
    width: 100%;
    height: 1px;
    background: gray;
  }
`;

function App() {
  return (
    <AppWrapper className="App">
      <Header></Header>
      <Banner className="banner">
        <div className="row">
          <div className="col-2">
            <img src={fondo} alt="" />
          </div>
          <div className="col-2">
            <h2>Finding dory</h2>
            <div className="line"></div>
            <ul className='inline'>
              <li>
                <a href="">Aventura</a>
              </li>
              <li>
                <a href="">Comedia</a>
              </li>
              <li>
                <a href="">Ficción</a>
              </li>
            </ul>
            <div className="line"></div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos quo quia magnam odio consectetur voluptatem eaque commodi cum. Nesciunt harum eos, quos repudiandae magnam iste illo numquam maxime eveniet eum!
            </p>
            <div className="line"></div>
            <button className="btn">GET TICKET</button>
          </div>
        </div>
      </Banner>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#2c66c2" fill-opacity="1" d="M0,192L60,181.3C120,171,240,149,360,154.7C480,160,600,192,720,218.7C840,245,960,267,1080,240C1200,213,1320,139,1380,101.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
        <WrapperBlog className="wrapper-info">
        <aside>
          {new Array(10).fill().map( ()=> {
            return (
            <Card className="card">
              <img src={aside} alt="" />
              <h5 className="title">
                ED O NESS
              </h5>
            </Card> 
            )
          })}
        </aside>
        <div className="blog">
          { new Array(10).fill().map( ()=>{
            return (
            <Card2 className="card-v2">
              <div className="cont-header">
              <img src={aside} alt="" />
              <div className="cont-info">
                <div className="align">
                <span className="circle"></span>
                <span>USA</span>
                <span>JUN 12, 2017</span>
                </div>
              <h5 className="title">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h5>
              <div className="line"></div>
              </div>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae neque fugiat assumenda quo porro similique aliquid labore vitae, obcaecati eius, doloremque maxime itaque, explicabo atque! Sint laborum ipsa expedita esse.
              </p>
            </Card2>

            )
          })}
        </div>
        </WrapperBlog>
      {/* <Dashboard></Dashboard> */}
    </AppWrapper>
  );
}

export default App;
