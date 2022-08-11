import React from 'react'
import { Brandimg, Brandpage, Cappacino, Cappacinoimg, Coldjava, Coldjavaimg, Con, Duknik, Latte, Latteimg, Maincon, Mocha, Mochaimg, Nescafe, Starbucks, Tim } from './style'
import cappacinoimg from '../../assets/img/Coffee.png'
import mochaimg from '../../assets/img/mocho.png'
import latteimg from '../../assets/img/latte.png'
import coldjavaimg from '../../assets/img/cofe.png'
import starbucks from '../../assets/img/Stackbuks.png'
import nescafe from '../../assets/img/Nescafe.png'
import tim from '../../assets/img/Tim.png'
import duknik from '../../assets/img/Dunkin.png'




const ExplorePage = () => {
  return (

    <Maincon>
      <h2>Explore the Coffee World</h2>
      <Con>
        <Cappacino>
            <Cappacinoimg src={cappacinoimg}/>
            <h1>Cappacino</h1>
            <p>Lorem ipsum dolor sit amet, <br />
             consectetur adipiscing elit. Massa, <br />
              fermentum id id vitae, integer <br />
               fermentum tellus. In vitae id nisl quis <br />
             ornare diam commodo in vel dolor.</p>
             <h4>$8.60</h4> 
             <button>Order now</button>
        </Cappacino>
        <Mocha>
            <Mochaimg src={mochaimg}/>
            <h1>Mocha</h1>
            <p>Lorem ipsum dolor sit amet, <br />
             consectetur adipiscing elit. Massa, <br />
              fermentum id id vitae, integer <br />
               fermentum tellus. In vitae id nisl quis <br />
             ornare diam commodo in vel dolor.</p>
             <h4>$9.20</h4> 
             <button>Order now</button>
        </Mocha>
        <Latte>
            <Latteimg src={latteimg}/>
            <h1>Latte</h1>
            <p>Lorem ipsum dolor sit amet, <br />
             consectetur adipiscing elit. Massa, <br />
              fermentum id id vitae, integer <br />
               fermentum tellus. In vitae id nisl quis <br />
             ornare diam commodo in vel dolor.</p>
             <h4>$11.40</h4> 
             <button>Order now</button>
        </Latte>
        <Coldjava>
            <Coldjavaimg src={coldjavaimg}/>
            <h1>Cold Java</h1>
            <p>Lorem ipsum dolor sit amet, <br />
             consectetur adipiscing elit. Massa, <br />
              fermentum id id vitae, integer <br />
               fermentum tellus. In vitae id nisl quis <br />
             ornare diam commodo in vel dolor.</p>
             <button>Order now</button>
             <h4>$6.40</h4> 
        </Coldjava>
        </Con>
        <Brandpage>
        <h1>Brands We Work With</h1>
           <Brandimg>
              <Starbucks src={starbucks} />
              <Nescafe src={nescafe}/>
              <Tim src={tim}/>
              <Duknik src={duknik} />
            </Brandimg>
        </Brandpage>
    </Maincon>




    )


}

export default ExplorePage