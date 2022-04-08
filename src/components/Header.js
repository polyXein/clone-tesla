import React, {useState } from "react";
import styled from 'styled-components'
import logo from '../images/logo.svg'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import  { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header(){
    
    /*material ui  */

    const [burgerStatus, setBurgerStatus] = useState(false);
    
    const cars = useSelector(selectCars)
    console.log(cars);

    const showMenu = () =>{
            setBurgerStatus(!burgerStatus);
    }   

    return(
<Container>
            <a>
                <img src={logo} alt=""/>
            </a>
        
    <Menu>
            {cars && cars.map((car, index) => (
                    <a key={index} href="#"> {car} </a>
            ))}
    </Menu>
    <RightMenu >
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu 
        onClick={showMenu}
        />
    </RightMenu>
    <BurgerNav
    show={burgerStatus}
    >
        <CloseWrapper>
            <CostumClose 
            onClick={showMenu}
            />
        </CloseWrapper>
        {cars && cars.map((car, index) => (
               <li>  <a key={index} href="#"> {car} </a> </li>
            ))}
        <List>
            <li><a href="#" /> Existing inventory</li>    
            <li><a href="#" /> Used Inventory</li>    
            <li><a href="#" /> Trade-in</li>    
            <li><a href="#" /> Cybertruck</li>    
            <li><a href="#" /> Roadster</li>    
            <li><a href="#" /> Semi </li>    
            <li><a href="#" />  Charging</li>    
            <li><a href="#" /> Powerwall</li>    
        </List>

    </BurgerNav>
</Container>
    )
}

export default Header


const Container = styled.div`
min-height: 60px;
position: fixed;
display:flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
top:0;
left:0;
right:0;
z-index: 1;
`
const List = styled.ul`
    li{
        text-decoration: none;
        list-style: none;
        font-weight: bold;
        cursor: pointer;
    }
`


const Menu = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex:1;
a{
    font-weight: 600;
    text-transform: upperCase;
    margin-right:10px;
    flex-wrap: nowrap;
}


@media (max-width: 800px){
    display:none;
}

`
const RightMenu = styled.div`
display:flex;
align-items: center;

a{
    font-weight: 600;
    text-transform: upperCase;
    margin-right:10px;
    flex-wrap: nowrap;
}

@media (max-width: 450px){
    a{
        visibility: hidden;
    }
}

`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
position: fixed;
top:0;
bottom:0;
right:0;
background: white;
width: 300px;
z-index: 16;
list-style: none;
padding: 20px;
display:flex;
flex-direction: column;
transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'}; 
transition: transform ;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0, .2);
        font-weight: 600;
    }

    a{
        font-weight: 600;
    }

@media (max-width: 550px){
    width: 180px
}
`

const CostumClose = styled(CloseIcon)`
cursor: pointer;
`

const CloseWrapper = styled.div`{
    display:flex;
    justify-content: flex-end;
}`