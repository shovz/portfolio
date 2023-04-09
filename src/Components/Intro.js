import React from 'react';
import shoval_5 from '../Pics/shoval_5.png';

function Intro() {
  return (
    <section class="intro" id="home">
        <h1 class="div__title section__title--intro">
            Hi, I am <strong>Shoval Zvulun</strong>
        </h1>
        <p class="section__subtitle section__subtitle--intro">Full Stack Developer</p>
        <img src={shoval_5} alt="shoval pic" class="intro__img"/>
    </section>
  );
};

export default Intro;