import React from 'react'
 import Nav from './compo2/nav.js';
 import Footer from './compo2/footer.js'
 import './home2.css'
 import { Link} from 'react-router-dom';
 //slider
import haikyu from "./slide/haikyuu.jpg"
import solo from './slide/solo.jpg'
import one from './slide/Picsart_23-02-07_20-17-12-080.jpg'
import naruto from './slide/naruto.jpg'
//anime images
import boruto from './animages/boruto.png'
import chainsaw from './animages/chainsaw.jpg'
import jjk from './animages/jjk.jpg'
import saitama from './animages/saitama.jpg'
 import demon from './animages/demonslayer.jpg'
 import darling from './animages/darling.png'
 //movie images
import pancreas from './movimages/I-Want-To-Eat-Your-Pancreas.jpg'
import name from './movimages/anime-your-name-kimi-no-na-wa-mitsuha-miyamizu-wallpaper-preview.jpg'
import weather from './movimages/Weathering-With-You-2019-HD-Poster-e1575712203649-990x556.png'
import lol from './movimages/6294632.png'
import mon from './movimages/steel.jpg'
import fireworks from './movimages/fireworks.jpg'
import garden from './movimages/garden.jpg'
import pokemon from './movimages/pokemon.jpg'
import red from './movimages/red.jpg'
//icons
import dance from './compo2/8480-narutohello.png';
import zero2 from './compo2/4041-zerotwobread.png'
const home2 = () => {
  return (
    <div className='cash'>
      <Nav/>
      <section> 
    <div class="rt-container">
    	<div class="col-rt-12">
  {/* <!-- Slider --> */}
          <div id="slider">
            <div class="slides">
              <div class="slider">
                <div class="legend"></div>
                <div class="content">
                  <div class="content-txt">
                    <h2>Solo Leveling</h2>
                    <p>Ten years ago, "the Gate" appeared and connected the real world with the realm of magic and monsters. To combat these vile beasts, ordinary people received superhuman powers and became known as "Hunters." Twenty-year-old Sung Jin-Woo is one such Hunter..</p>
                  </div>
                </div>
                <div class="image"> <img src={solo}/> </div>
              </div>
              <div class="slider">
                <div class="legend"></div>
                <div class="content">
                  <div class="content-txt">
                    <h2>Haikyuu</h2>
                    <p>Inspired after watching a volleyball ace nicknamed "Little Giant" in action, small-statured Shouyou Hinata revives the volleyball club at his middle school. The newly-formed team even makes it to a tournament; however, their first match turns out to be their last</p>
                  </div>
                </div>
                <div class="image"> <img src={haikyu}/> </div>
              </div>
              <div class="slider">
                <div class="legend"></div>
                <div class="content">
                  <div class="content-txt">
                    <h2>One Piece </h2>
                    <p>Gold Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existenc..</p>
                  </div>
                </div>
                <div class="image"> <img src={one}/> </div>
              </div>
              <div class="slider">
                <div class="legend"></div>
                <div class="content">
                  <div class="content-txt">
                    <h2>Naruto</h2>
                    <p>Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrif...</p>
                  </div>
                </div>
                <div class="image"> <img src={naruto}/> </div>
              </div>
            </div>
          
          </div>
         </div> 
	          </div>
</section>
<div className="ram1"><hr/>
  <h1>Top Trending Anime!!!  <img id="icon" src={zero2} /></h1><hr/>
</div>

<div class="pro-container">
    <div class="pro">
    <Link to='/stream'> <img src={solo} alt=""/></Link>
            <div class="des">
               
                <h3>Solo Leveling</h3>
                
            </div>
            </div>

            <div class="pro">
            <Link to='/stream'><img src={one} alt=""/></Link>
            <div class="des">
               
                <h3>One Piece</h3>
                
            </div>
            </div>
           
            <div class="pro">
            <img src={chainsaw} alt=""/>
            <div class="des">
               
                <h3>Chainsaw Man</h3>
               
            </div>
            </div>
            

            <div class="pro">
            <img src={boruto} alt=""/>
            <div class="des">
               
                <h3> BORUTO: Naruto's Next Generation </h3>
                
            </div>
            </div>

            <div class="pro">
            <img src={jjk} alt=""/>
            <div class="des">
               
                <h3>Jujutsu Kaisen</h3>
                
            </div>
            </div>
           
            <div class="pro">
            <img src={naruto} alt=""/>
            <div class="des">
               
                <h3>NARUTO</h3>
               
            </div>
            </div>


            </div>

           


          <div class="pro-container">
    <div class="pro">
            <img src={saitama} alt=""/>
            <div class="des">
               
                <h3>one punch man</h3>
                
            </div>
            </div>

            <div class="pro">
            <img src={demon} alt=""/>  
            <div class="des">
               
                <h3>Demon slayer</h3>
                
            </div>
            </div>
           
            <div class="pro">
            <img src={darling} alt=""/>
            <div class="des">
               
                <h3>darling in the franxx</h3>
               
            </div>
            </div>
            </div>
 
            <div className="ram1"><hr/>
  <h1>Anime Movies!!!  <img id="icon" src={dance} /></h1><hr/>
</div>
<div class="pro-container">
    <div class="pro">
            <img src={pancreas} alt=""/>
            <div class="des">
               
                <h3>i want to eat your pancreas</h3>
                
            </div>
            </div>

            <div class="pro">
            <img src={name} alt=""/>  
            <div class="des">
               
                <h3>Your Name</h3>
                
            </div>
            </div>
           
            <div class="pro">
            <img src={weather} alt=""/>
            <div class="des">
               
                <h3>weathering with you</h3>
               
            </div>
            </div>
            

            <div class="pro">
            <img src={lol} alt=""/>
            <div class="des">
               
                <h3>Josee the tiger and the fish </h3>
                
            </div>
            </div>

            <div class="pro">
            <img src={mon} alt=""/>  
            <div class="des">
               
                <h3>doraemon:nobita's steel troops</h3>
                
            </div>
            </div>
           
            <div class="pro">
            <img src={fireworks} alt=""/>
            <div class="des">
               
                <h3>fireworks</h3>
               
            </div>
            </div>


            
    <div class="pro">
            <img src={garden} alt=""/>
            <div class="des">
               
                <h3>garden of words</h3>
                
            </div>
            </div>

            <div class="pro">
            <img src={pokemon} alt=""/>  
            <div class="des">
               
                <h3>pokemon:the movie</h3>
                
            </div>
            </div>
           
            <div class="pro">
            <img src={red} alt=""/>
            <div class="des">
               
                <h3>one piece film red</h3>
               
            </div>
            </div>
            </div>
    <Footer/>
    </div>
  )
}

export default home2
