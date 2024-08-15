import React from 'react'
import Nav from './compo2/nav.js';
import Footer from './compo2/footer.js';
import './news.css';
//
import n1 from './news/n1.jpeg'
import n2 from './news/n2.jpeg'
import n3 from './news/n3.jpeg'
import n4 from './news/n4.jpeg'
import n5 from './animages/attacktitan.jpg'
// import n6 from './news/n6.jpeg'

import dance1 from './compo2/5976_FoxxoHappyNod.gif'
const news = () => {
  return (<>
  <div className="ramonn">
<Nav/> 
    <div>
     
      <header className="showcasee">
        <div className="containerrrr">
            <div className="text-content">
                <p className="super">Action</p>
                <h1>UPDATES ON DEMON SLAYER INFINITY CASTLE ARC</h1>
                <p>
                A new Louis Vuitton collection inadvertently bears a striking resemblance to the distinctive Demon Slayer character designs for Tanjiro and Zenitsu.
The new Louis Vuitton Men’s Spring Summer collection is going viral among anime fans for its striking resemblance to several Demon Slayer: Kimetsu no Yaiba characters.  </p>
            </div>
        </div>
    </header>
</div>
   <div className="hola">
<section>
       
            <h1 class="editor-h1">Editor Picks!!!<img src={dance1} id='icon' /></h1><hr/> 
            <div class="containerrrr">
            <div class="articles">
                <a href="./html/article.html" class="card">
                <img src={n1} alt="" />
                    <article>

                        <h1>Fairytale New Season??????</h1>
                        <p>
                        The Muse India YouTube channel began streaming the anime adaptation of Hiro Mashima's Fairy Tail manga on January 19.
the latest and final anime season based on Mashima's manga, in India in September 2022. The 328th and final episode of the anime aired in Japan in September 2019.
 Netflix is streaming the anime in India.<br/>
 Mashima's Fairy Tail manga series follows the adventures of world's most notorious mage guild, Fairy Tail.
                        </p>
                    </article>
                </a>

                <a href="./html/article.html" class="card">
                    <article>
                        
                        <h1>The wait is finally over for Indian anime fans</h1>
                        <p>
                        The release of the film in India will come just a week after its release in the United States. The Indian anime community is excited, with many taking to social media to count down the days until they can experience the stunning animation and captivating story that have already won over audiences in Japan.The director himself visited India to attend the film's screenings, and the response from fans was overwhelmingly positive.
                        </p>
                    </article>
                </a>

                <a href="./html/article.html" class="card">
                <img src={n2} alt="" />
                    <article>
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <p>
                        The official English and Japanese Twitter accounts for the takt op. Symphony (takt op. Unmei wa Akaki Senritsu no Machi o) smartphone game in Bandai Namco Arts and DeNA's takt op. (pronounced "takt opus") project revealed on Thursday that the game will end service on April 9. The game's staff commented regarding the announcement, "Despite our best efforts as an operations team to provide better service, we have come to the conclusion that it is becoming difficult to continue to make game content that satisfies Conductors."
The game launched on June 28.
                        </p>
                    </article>
                </a>

                <a href="./html/article.html" class="card">
                    <article>
                        <h1>Valentine's Day Special!!!</h1>
                        <p>
                        Valentine's Day — it's that time of the year when love is in the air, and people in Japan want to give chocolate to their beloved, friends, and colleagues. The ultimate show of love is the gift of homemade chocolate. But sometimes, it can be difficult to decide what kind of chocolate to make for the holiday. Thankfully, one of Japan's largest confection makers, Meiji, has you covered with some Oshi no Ko-inspired chocolate recipes.
Along with the chocolate recipes, Meiji announced on its website that it will be gifting 20 followers of its official Twitter account who repost the Oshi no Ko and Meiji collaboration one of two original Oshi no Ko 5000 yen (about US$33.74) Quo cards.
                        </p>
                    </article>
                    <img src={n3} alt="" />
                </a>

                <a href="./html/article.html" class="card">
                <img src={n4} alt="" />
                    <article>
                        <h1>Manga turning into anime</h1>
                        <p>
                        The official website of the Mushoku Tensei: Isekai Ittara Honki Dasu (Mushoku Tensei: Jobless Reincarnation) television anime series announced on Saturday the staff, key visual (pictured), and a teaser promotional video for the second part of season two. The anime is scheduled to premiere on April 8 at 12:00 a.m. on Tokyo MX, KBS Kyoto, and BS11, followed by Sun TV.
The anime adapts Rifujin na Magonote's adventure fantasy light novel, which he penned on the Shousetsuka ni Narou website between November 2012 and April 2015. Kadokawa began printing the novel with illustrations by Sirotaka under its MF Books label in January 2014 and shipped the 26th and final volume in November 2022.
                        </p>
                    </article>
                </a>

                
                 
            <a href="./html/article.html" class="card">
                    <article>
                        <h1>Attack on Titan Creator Hajime Isayama at Anime NYC.</h1>
                          <p>
                         The event marked the Attack on Titan manga creator's first-ever appearance in the United States and while enthusiasm for the anime is still going strong. These are impressive milestones for any work of fiction, but the manga series' ending has remained controversial, a fact Isayama is well aware of. Kodansha issued a statement from the manga creator on its Instagram page prior to the convention that read: "I am aware that the ending of Attack on Titan was quite controversial.
                        </p>
                    </article> <img src={n5} alt="" />
                </a>
                </div>
        </div>
    </section>
</div>
<hr/>
<section id="newsletter" class="section-p1 section-m1">
    <div className="newstext">
        <h4> Sign Up to receive News in Mail</h4>
        <p>Get E-mail updates about our latest anime ,movies uploads and <span>special offers</span> </p>
 </div>
</section><hr/>
        <Footer/></div>
    </>
  )
}

export default news
