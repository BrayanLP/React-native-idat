import React,{ Component} from 'react';
import logo from '../assets/logo.png';
import styled from 'styled-components'

const H3 = styled.h3`
font-size: 20px;
font-weight: bold;
`;

const Title  = styled.div`
display: grid;
grid-template-columns: 50px 1fr;
align-items: center;
justify-content: center

`;

const Content = styled.p`
display: block;
font-size: 14px;
`;

const CardWrapper = styled.div`
max-width: 350px;
margin: 0 auto;
`;

const ImgSize = styled.img`
  width: 40px;
`;

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { title, img , description  } = this.props
    return (
      <CardWrapper className="card">
        <Title className="title">
        <ImgSize src={img} alt="" />
        <H3>
          {title}
        </H3> 
        </Title>
      <Content>
        {description}
      </Content>
      </CardWrapper>
      );
  }
}
 
export default Card;