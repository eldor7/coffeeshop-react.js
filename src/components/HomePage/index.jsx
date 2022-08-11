import React from 'react'
import { Container,Navbar, Navcentr, Navleft, Navright} from './style'
import navleft from '../../assets/img/filtro.png'

const HomePage = () => {
  return (
      
      <Container>
        <Navbar>
          <Navleft src={navleft}/>
          <Navcentr>
            <p>Home</p>
            <p>Explore Us</p>
            <p>Brands</p>
            <p>Contact us</p>
          </Navcentr>
          <Navright>
              <button>Sign up/Login</button>
              <button>Get the app</button>
          </Navright>
        </Navbar>
        <h1>Power up with coffee</h1>
        <h4>Start your exciting day with a cup of Brew Coffee</h4>
        <button>Explore Us</button>
      </Container>
  )
}

export default HomePage