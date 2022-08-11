import React from 'react'
import { About, Centercon, Containeer, Facebookimg, Follow, Followus, Franchise, Instimg, Merchandise, Socialimg, Twitterimg } from './style'
import instimg from '../../assets/img/Insta.png'
import facebookimg from '../../assets/img/Fb.png'
import twitterimg from '../../assets/img/twitter.png'
import socialimg from '../../assets/img/pinterest.png'




const FooterPage = () => {
  return (
 
    <Containeer>
        <h2>Get in Touch with Us</h2>
        <Centercon>
        <Merchandise>
            <h1>Merchandise</h1>
            <p>T-shirts</p>
            <p>Caps</p>
            <p>Masks</p>
        </Merchandise>
        <Franchise>
            <h1>Franchise</h1>
            <p>Coffee Outlet</p>
            <p>Coffee Vending Machine</p>
            <p>Contact Us</p>
        </Franchise>
        <About>
        <h1>About Us</h1>
            <p>Promotions</p>
            <p>Customer Care</p>
            <p>Legal Information</p>
            <p>Achievements </p>
            <p>Careers</p>
        </About>
        <Follow>
            <Followus>
                <h1>Follow Us</h1>
                <Instimg src={instimg}/>
                <Facebookimg src={facebookimg}/>
                <Twitterimg src={twitterimg}/>
                <Socialimg src={socialimg}/>
            </Followus>
        </Follow>
        </Centercon>
    </Containeer>

  )
}

export default FooterPage