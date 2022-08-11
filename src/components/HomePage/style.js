import styled from "styled-components";
import Bgimage from '../../assets/img/Bgimage.png'

export const Container = styled.div`
background-image: url(${Bgimage});
height: 800px;
background-size: cover;
background-position: center;
text-align: center;
h1{
    padding-top: 180px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 72px;
    line-height: 84px;
    color: #FFFADA;
}
h4{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #CCB9B1;
}
button{
    background: linear-gradient(90deg, #A0583C 0%, #C08267 100%);
    border-radius: 18px;
    width: 250px;
    height: 55px;
    margin-top: 20px;
    border: none;
    cursor: pointer;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #EFEFF5;
}
`

export const Navbar = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-left: 85px;
margin-right: 10px;
`

export const Navleft = styled.img`
width: 60px;
height: 23px;
font-family: 'Gotham';
font-style: italic;
font-weight: 700;
font-size: 24px;
line-height: 23px;
color: #FFFFFF;
`

export const Navcentr = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #EFEFF5;
width: 40%;
margin-left: 85px;
cursor: pointer;
`

export const Navright = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 18%;
button{
    width: 115px;
    height: 30px;
    background: #A0583C;
    border-radius: 8px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    color: #EFEFF5;
    border: none;
    cursor: pointer;
    
}
`


