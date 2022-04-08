import React from 'react'
import styled from 'styled-components'
import downArrow from '../images/down-arrow.svg'
import Fade from 'react-reveal/Fade';

function Section(
    {title, description,
    leftBtnText,rightBtnText,
    backgroundImg,
    }){

        
    return(
    <Wrap 
       bgImage={backgroundImg} >
           <Fade bottom >
            <ItemText> 
               <h1>{title} </h1>
            <p>
            {description}
            </p>
            </ItemText>
           </Fade>
        
        <Fade button>
          <Buttons>
        <Fade button>
          <ButtonGroup>
               <LeftButton>
                   {leftBtnText}
               </LeftButton>
          {rightBtnText && 
                 <RightButton>
                 {rightBtnText}
                 </RightButton>
           }
          
           </ButtonGroup>
        </Fade>    

           <DownArrow 
             src={downArrow} />
          </Buttons>
          </Fade>
    </Wrap>  

    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: ${props => `
    url("${props.bgImage} ")
    `};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
;

const ItemText = styled.div`
z-index:10;
padding-top: 15vh;
text-align: center;
height: 160px ;
display:flex;
flex-direction: column;
justify-content: space-between;

    h1{
        font-size:48px;
    }
@media (max-width: 450px){
    h1 {
        font-size: 28px;

    }
}

`;

const ButtonGroup = styled.div`
display: flex;
    @media (max-width: 768px){
        flex-direction: column;
    }
`;

const LeftButton = styled.div`
background-color: rgba(23,26,32,0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content:center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: upperCase;
font-size: 12px;
cursor: pointer;
margin-left: 8px;
margin-right: 8px;
margin-bottom: 10px;
@media (max-width: 768px){
    margin: 8px;
}
`;

const RightButton = styled(LeftButton)`
background-color: white;
opacity: 0.7;
color: black;
`;
const DownArrow = styled.img`
    height: 40px;
    margin-bottom: 20px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;    
    @media (max-width: 768px){
        margin-bottom: 10px;
    }
    `
const Buttons = styled.div`
display:grid;
place-items: center;
`