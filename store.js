import React from 'react'
import Nav from './compo2/nav.js';
import Footer from './compo2/footer.js';
import './store.css';
//icons
import dance from './compo2/8480-narutohello.png';
import dance2 from './compo2/7613-demoncatgirlvibe.gif'
import zerotwo from './compo2/4041-zerotwobread.png'
//closet  import  from './closet/'
 import yuji from './closet/yuji.jpg'
 import vball from './closet/vballjacket.jpg'
 import sensei from './closet/sensei.jpg'
 import luffy from './closet/luffy.jpg'
 import gojo from './closet/gojo.jpg'
 import titan from './closet/titan.jpg'
 //manga & manhwa  import rent from './manga'
import rent from './manga/rent.jpg'
import silent from './manga/silent.jpg'
import berserk from './manga/berserk.jpg'
import blue from './manga/blue.jpg'
import naga from './manga/naga.jpg'
import tokyo from './manga/tokyo.jpg'
//Acessories
import beanie from './access/beanie.jpg'
import anya from './access/anya.jpg'
import poster from  './access/poster.jpg'
import hinata from './access/hinata.jpg'
import red from './access/red.jpg'
import chill from './access/chill.jpg'
//banner img
import banner from './compo2/wp8935181-anime-youtube-banner-wallpapers.jpg'
const store = () => {
  return (
  <>
  <div className="ra">
  <div>
  <Nav/>
  
  <section id="herooo">

    <h1>Summer sale starts from 21<sup>st</sup> Febuary. </h1>
    </section>

    <section id="product11" class="section-p1" >
    <h2>All new anime merch!!!<img src={dance} id='icon' />
    </h2><hr/>
    <p>Latest Drops</p>
    <div class="pro-container">
    <div class="pro">
            <img src={yuji} alt=""/>
            <div class="des">
               
                <h5>Itadori Jujutsu Uniform</h5><hr/>
                <h4>₹1,350</h4>
            </div>
            </div>

            <div class="pro">
            <img src={vball} alt=""/>  
            <div class="des">
               
                <h5>Karasuno Bomber Jacket</h5><hr/>
                <h4>₹1,999</h4>
            </div>
            </div>
           
            <div class="pro">
            <img src={sensei} alt=""/>
            <div class="des">
               
                <h5>Sensei Cosplay Jacket</h5><hr/>
                <h4>₹2,350</h4>
            </div>
            </div>
            
            </div>


            <div class="pro-container">
    <div class="pro">
            <img src={luffy} alt=""/>
            <div class="des">
               
                <h5>Monster Trio Bomber Jacket (Oversize Drop-Shoulder)</h5><hr/>
                <h4>₹2,054</h4>
            </div>
            </div>

            <div class="pro">
            <img src={gojo} alt=""/>
            <div class="des">
               
                <h5>I’ll Murder You Tie Dye (Oversize Drop-Shoulder)</h5><hr/>
                <h4>₹899</h4>
            </div>
            </div>
           
            <div class="pro">
            <img src={titan} alt=""/>
            <div class="des">
               
                <h5>Let’s Fight (Oversize Stone Washed)</h5><hr/>
                <h4>₹1,599</h4>
            </div>
            </div>
            
            </div>
    </section>
    
    <div className="banner"><br/>
      <h1>35% discount <br/><span>on your first order.</span></h1><br/>
    </div>
    
    <section id="product11" class="section-p1" >
    <h2>Manga & Manhwa zone!!!!!  <img src={dance2} id='icon' />
    </h2><hr/>
    <p>Latest Drops</p>
    <div class="pro-container">
    <div class="pro">
            <img src={rent} alt=""/>
            <div class="des">
               
                <h5>Rent-A-Girlfriend 1</h5><hr/>
                <h4>₹950</h4>
            </div>
            </div>

            <div class="pro">
            <img src={silent} alt=""/>
            <div class="des">
               
                <h5>A Silent Voice</h5><hr/>
                <h4>₹699</h4>
            </div>
            </div>
           
            <div class="pro">
            <img src={berserk} alt=""/>
            <div class="des">
               
                <h5>Berserk Volume 2</h5><hr/>
                <h4>₹799</h4>
            </div>
            </div>
            
            </div>


            <div class="pro-container">
    <div class="pro">
            <img src={blue} alt=""/>
            <div class="des">
               
                <h5>Blue lock</h5><hr/>
                <h4>₹1,300</h4>
            </div>
            </div>

            <div class="pro">
            <img src={tokyo} alt=""/>
            <div class="des">
               
                <h5>Tokyo Revengers vol 2</h5><hr/>
                <h4>₹1,999</h4>
            </div>
            </div>
           
            <div class="pro">
            <img src={naga} alt=""/>
            <div class="des">
               
                <h5>Don’t Toy With Me, Miss Nagatoro </h5><hr/>
                <h4>₹1,350</h4>
            </div>
            </div>
            
            </div>
    </section>

    <div>
    <img src={banner} id='banner1'/>
</div>

    <section id="product11" class="section-p1" >
    <h2>Accessories and more!!!!! <img src={zerotwo} id='icon'/>
    </h2><hr/>
    <p>Top Quality</p>
    <div class="pro-container">
    <div class="pro">
            <img src={beanie} alt=""/>
            <div class="des">
               
                <h5>jujutsu-sorcerer-beanie</h5><hr/>
                <h4>₹699</h4>
            </div>
            </div>

            <div class="pro">
            <img src={chill} alt=""/>
            <div class="des">
               
                <h5>Anime and chill Badge</h5><hr/>
                <h4>₹59</h4>
            </div>
            </div>
           
            <div class="pro">
            <img src={anya} alt=""/>
            <div class="des">
               
                <h5>Anya Forger action figure</h5><hr/>
                <h4>₹7,999</h4>
            </div>
            </div>
            
            </div>


            <div class="pro-container">
    <div class="pro">
            <img src={hinata} alt=""/>
            <div class="des">
               
                <h5>Karasuno Sticker</h5><hr/>
                <h4>₹59</h4>
            </div>
            </div>

            <div class="pro">
            <img src={poster} alt=""/>
            <div class="des">
               
                <h5>Gear 5 luffy bounty poster</h5><hr/>
                <h4>₹299</h4>
            </div>
            </div>
           
            <div class="pro">
            <img src={red} alt=""/>
            <div class="des">
               
                <h5>angry alric sticker</h5><hr/>
                <h4>₹50</h4>
            </div>
            </div>
            
            </div>
    </section>
<hr/>

    <section id="banner3">
   <div class="banner-box">
    <h2>SEASONAL SALE</h2>

    </div>
    <div class="banner-box banner-box2">
      
        </div>
        <div class="banner-box banner-box3">
      <h1>SUMMER WEAR</h1>
            </div>
 </section>

    <Footer/></div></div>
  
    </>
  )
}

export default store