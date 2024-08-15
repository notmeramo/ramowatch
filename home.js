import React from 'react'
import Nav from './compo2/nav.js';
import Footer from './compo2/footer.js'
import './home.css'
//icon
import zero2 from './compo2/4041-zerotwobread.png'
import dancee from './compo2/7613-demoncatgirlvibe.gif'
import zerotwod from './compo2/1558-zerotwo-exciteddance.gif'
//team
//  import ramo from './compo2/ramon.jpg'
// import anshu from "./compo2/anshu.jpg"
// import crosby from "./compo2/crosby.jpg"
// import simon from "./compo2/simon.jpg"
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
//anime images
import boruto from './animages/boruto.png'
import chainsaw from './animages/chainsaw.jpg'
import jjk from './animages/jjk.jpg'
import saitama from './animages/saitama.jpg'
import demon from './animages/demonslayer.jpg'
import darling from './animages/darling.png'
//slide
import haikyu from "./slide/haikyuu.jpg"
import solo from './slide/solo.jpg'
import one from './slide/Picsart_23-02-07_20-17-12-080.jpg'
import naruto from './slide/naruto.jpg'
import { Link } from 'react-router-dom';
const home = () => {
  return (<>
  <div className="ram">
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


<div className="bannerrr"><hr/>
  <h1>Top Trending Anime!!!<img src={zero2} height={50}/></h1><hr/>
</div>

<div class="containeramo">
	   <div class="columnn">
	     <img src={solo} alt="image1"/>
	   </div>
	   <div class="columnn">
	     <img src={haikyu} alt="image1"/>
	   </div>
	   <div class="columnn">
	     <Link to='/stream'><img src={one}  alt="image1"/></Link>
	   </div>
 </div>
	{/*second row */}
  <div class="containeramo">
	   <div class="columnn">
	     <img src={boruto} alt="image1"/>
	   </div>
	   <div class="columnn">
	     <img src={chainsaw} alt="image1"/>
	   </div>
	   <div class="columnn">
	     <img src={jjk}  alt="image1"/>
	   </div>
 </div>{/*<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
<div className='bannerrr'>
<h1>TOP ANIME MOVIES<img src={dancee} height={50}/></h1><hr/></div>

<div class="containeramo">
	   <div class="columnn">
	     <img src={lol} alt="image1"/>
	   </div>
	   <div class="columnn">
	     <img src={mon} alt="image1"/>
	   </div>
	   <div class="columnn">
	     <img src={fireworks}  alt="image1"/>
	   </div>
 </div>
	{/*second row */}
  <div class="containeramo">
	   <div class="columnn">
	     <img src={pancreas} alt="image1"/>
	   </div>
	   <div class="columnn">
	     <img src={name} alt="image1"/>
	   </div>
	   <div class="columnn">
	     <img src={weather}  alt="image1"/>
	   </div>
 </div>{/*<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
<div className='bannerrr'>
<h1>MOSTLY WATCHED..<img src={zerotwod} height={50}/></h1><hr/></div>

<div class="containeramo">
	   <div class="columnn">
	     <img src={saitama} alt="image1"/>
	   </div>
	   <div class="columnn">
	     <img src={darling} alt="image1"/>
	   </div>
	   <div class="columnn">
	     <img src={demon}  alt="image1"/>
	   </div>
 </div>
	{/*second row */}
  <div class="containeramo">
	   <div class="columnn">
	     <img src={pokemon} alt="image1"/>
	   </div>
	   <div class="columnn">
	     <img src={garden} alt="image1"/>
	   </div>
	   <div class="columnn">
	     <img src={red}  alt="image1"/>
	   </div>
</div>{/*<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
*/}
{/* <div class="main-container">
        <h2>Our Team</h2>
        <hr/>
        <div class="members">
            <div class="team-member">
                <img src={ramo}/>
                <h3>Ramon Bakuri</h3>
                <p>Roll no : 06</p>
                
            </div>
            <div class="team-member">
                <img src={anshu}/>
                <h3>Anshu Patel</h3>
                <p>Roll no : 43</p>
            </div>
            <div class="team-member">
                <img src={simon}/>
                <h3>Simon Kaur</h3>
                <p>Roll no : 48</p>
            </div>
            <div class="team-member">
                <img src={crosby}/>
                <h3>Crosby Dias</h3>
                <p>Roll no : 74</p>
            </div></div></div> */}
<Footer/>
</div>
</>  )
}

export default home
