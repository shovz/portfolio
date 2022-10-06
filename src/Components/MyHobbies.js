import React from 'react';
import shoval_2 from '../Pics/shoval_2.jpg'

function MyHobbies() {
  return (
    <section class="about-me" id="about">
        <h2 class="section__title section__title--about">My Hobbies</h2>
        <p class="section__subtitle section__subtitle--about">
            "DO MORE OF WHAT MAKES YOU HAPPY"
        </p>
        <div class="about-me__body">
            <p> 
              Growing up as 4 brothers it was inevitable for me not to draw into gaming,
              whether it was playing legos, football, cards, etc.. but especially video games.
              I love everything about gaming, the stories, the characters, the sounds,
              achieving goals, cooperating as a team, etc.
              To this day I always leave some room to play with friends or even alone.
            </p>
            <p> 
              Being around computers all day made me very tech-oriented,
              most of my hobbies involve a computer. I love creating something out of
              nothing for this purpose I have learned 3D modeling using several skills
              and software, photoshopping, and recently creating web applications.<br/>
              It is in my nature to continue learning new skills.
            </p>
            <p> 
              A few years ago I discovered my passion for swimming,
              after 27 years of being afraid of water I finally faced my
              biggest fear and took swimming classes.
              It was the best decision I have ever made!
            </p>
        </div>
        <img src={shoval_2} class="about-me__img" alt="shoval pic 2"/>
    </section>

  )
}

export default MyHobbies;