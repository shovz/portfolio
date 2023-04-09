import React from 'react';
import JobTracker from '../Pics/JobTracker.JPG';
import GameHackthon from '../Pics/GameHackthon.JPG';
import BigBuyers from '../Pics/BigBuyers.JPG';
import cigaromat_1 from '../Pics/cigaromat_1.jpg';
import cigaromat_2 from '../Pics/cigaromat_2.jpg';
import cigaromat_3 from '../Pics/cigaromat_3.jpg';
import guitar from '../Pics/guitar.jpg';
import MyMotorcycle from '../Pics/MyMotorcycle.jpg';
import Phone_Booth from '../Pics/Phone_Booth.png';
import porsche from '../Pics/porsche.JPG';
import replacer from '../Pics/replacer.jpg';
import rhino from '../Pics/rhino.png';
import Room_Scene_1 from '../Pics/Room_Scene_1.png';
import Room_Scene_2 from '../Pics/Room_Scene_2.jpg';


function MyWork() {
  return (
    <section class="my-work" id="work">
        <h2 class="section__title section__title--work">My Work</h2>
        <div>
          <p class="section__subtitle section__subtitle--work"> WEB APPLICATIONS </p>
          <div class="portfolio">

              {/* <!-- portfolio item 01 --> */}
              <a href="https://shoval-jobtracker.herokuapp.com" class="portfolio__item">
                  <img src={JobTracker}  class="portfolio__img" alt="portfolio img"/>
              </a>
              <a href="https://big-buyers.herokuapp.com/" class="portfolio__item">
                  <img src={BigBuyers}  class="portfolio__img" alt="portfolio img"/>
              </a>
              <a href="https://shovz.github.io/Games-Hackthon" class="portfolio__item">
                  <img src={GameHackthon} class="portfolio__img" alt="portfolio img"/>
              </a>
          </div>
        </div>

        <div>
            <p class="section__subtitle section__subtitle--work"> 3D DESIGN </p>
            <div class="portfolio">

                {/* <!-- portfolio item 01 --> */}
                <a href="#" class="portfolio__item">
                    <img src={cigaromat_1}  class="portfolio__img" alt="portfolio img"/>
                </a>
                <a href="#" class="portfolio__item">
                    <img src={cigaromat_2}  class="portfolio__img" alt="portfolio img"/>
                </a>
                <a href="#" class="portfolio__item">
                    <img src={cigaromat_3}  class="portfolio__img" alt="portfolio img"/>
                </a>
                <a href="#" class="portfolio__item">
                    <img src={guitar}  class="portfolio__img" alt="portfolio img"/>
                </a>
            </div>
            <div class="portfolio">
            <a href="#" class="portfolio__item">
                <img src={porsche}  class="portfolio__img" alt="portfolio img"/>
            </a>
            <a href="#" class="portfolio__item">
                <img src={MyMotorcycle} class="portfolio__img" alt="portfolio img"/>
            </a>
            <a href="#" class="portfolio__item">
                <img src={Phone_Booth}  class="portfolio__img" alt="portfolio img"/>
            </a>
            <a href="#" class="portfolio__item">
                <img src={replacer} class="portfolio__img" alt="portfolio img"/>
            </a>
            </div>
            <div class="portfolio">
            <a href="#" class="portfolio__item">
                <img src={rhino}  class="portfolio__img" alt="portfolio img"/>
            </a>
            <a href="#" class="portfolio__item">
                <img src={Room_Scene_1} class="portfolio__img" alt="portfolio img"/>
            </a>
            <a href="#" class="portfolio__item">
                <img src={Room_Scene_2}  class="portfolio__img" alt="portfolio img"/>
            </a>
            
            </div>
        </div>
        
    </section>
  );
};

export default MyWork;