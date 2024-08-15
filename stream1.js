import React from 'react'
import Nav from './compo2/nav.js';
import Footer from './compo2/footer.js'
import opiece from './compo2/gear5.mp4'
import './home.css'
// import arrow1 from './compo2/rightarrow.png'
//image boxes
import saitama from './animages/saitama.jpg'
import demon from './animages/demonslayer.jpg'
import darling from './animages/darling.png'
//icons
import luffy from './compo2/_Ace_.png'
import { Link } from 'react-router-dom';
const stream1 = () => {
  return (
    <div className='fulll'>
      <Nav/>
      <div className='UparKatext'><hr/>
        <h2>One Piece Episode 1 English Subbed<img src={luffy}  height={50}/></h2><hr/>
       <div className="detail">
        One Piece English Subbed at ramoWatch .<br/>
        <span>Category :</span> TV Series.<br/>
        <span>Anime info :</span> One Piece .<br/>
        <span>Released :</span> 1999.<br/>
        <span>Status :</span> Ongoing<br/>
        <span>Genre :</span> Thriller,Action,Sci-fi<br/><br/><br/>
        <span> Please reload the page , if video is not playing...</span>
        </div>
      </div>
     
      <div className='opiece'><video src={opiece}  controls>
</video> <div className='visual'><Link to="/stream2"><button id='hii'>Next</button></Link>{/* <button id='heyy'>Previous</button>*/}</div> 
</div><br/><br/><hr/>

<div className="detail">
    <center><span>Synopsis:</span></center>
    <p>ONE PIECE : Gol D. Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King. Enter Monkey D. Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, 
    Luffy's reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. 
    Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, 
    unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece.
</p></div>

<div className="ram1"><hr/>
  <h1>Top Trending Anime!!!  <img id="icon" src={luffy} /></h1><hr/>
</div>

<div class="pro-container">
    <div class="pro">
    <Link to='/stream'> <img src={darling} alt=""/></Link>
            <div class="des">
               
                <h3>darling in the franxx</h3>
                
            </div>
            </div>

            <div class="pro">
            <Link to='/stream'><img src={demon} alt=""/></Link>
            <div class="des">
               
                <h3>Demon slayer</h3>
                
            </div>
            </div>
           
            <div class="pro">
            <img src={saitama} alt=""/>
            <div class="des">
               
                <h3>one punch man</h3>
               
            </div>
            </div></div>
      <Footer/>
    </div>
  )
}

export default stream1
