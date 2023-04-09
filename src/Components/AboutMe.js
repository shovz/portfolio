import React from 'react';
import shoval_1 from '../Pics/shoval_1.jpg';

function AboutMe() {
  return (
    <section class="about-me" id="about">
        <h2 class="section__title section__title--about">Who am I</h2>
        <p class="section__subtitle section__subtitle--about">
        Shoval Zvulun, 31, Full Stack Developer.
        </p>
        <div class="about-me__body">
            <p>
              Hi my name is <span style={{fontWeight:'bold'}}> Shoval Zvulun </span>
              I'm a 31 years old from Ramat Gan, Israel.<br/>
              A mechanical engineer turned into a software engineer.
            </p>
            <p>    
              Has B.S in mechanical engineering from Afeka Tel Aviv Academic <br/>College of Engineering :
              <ul style={{margin:'8px 30px'}}>
                
                <li>Specialized in robotics and control systems</li>
                <li>Controller programming (Arduino)</li>
                <li>Final project results : 
                  <a style={{textDecoration:'none',color:'lightblue',margin:'0 10px'}} 
                    href='https://www.youtube.com/watch?v=HCxh-i2JTVE&list=PLihQyCTZaJ2KvQ-75HkKPMZP0oe7cE7Zh&ab_channel=shovalzvulun'> 
                        demonstration videos
                    </a>
                </li>
              </ul>
            </p>
            <p> 

            While working as a mechanical engineer, I discovered my passion for software development.
            Since then I was working on my programming skills,
            Finished a 12-weeks intensive full-time Bootcamp focusing on <span style={{fontWeight:'bold'}}> Full Stack Web Development. </span>
            Now I am  looking for a<span style={{fontWeight:'bold'}}>  job </span> in the industry. 

            </p>
            <p> 
              Technologies I am using as a web developer : 
              <span style={{fontWeight:'bold'}}>  HTML, CSS Javascript, React.js (with Redux & Hooks), Node.js, Express.js and PostgreSQL.</span>
              
            </p>
            <p> 
              I also possess great skills in 
              Computer-Aided Design (CAD), controller programming (Arduino), 
              and SolidWorks from my time working as a mechanical engineer.
            </p>
            <p> 
              Self-taught skills: Blender 3D modeling and rigging, Photoshop and Lightroom photos, assets editing.
            </p>
        </div>
        <img src={shoval_1} class="about-me__img" alt="shoval pic 2"/>
    </section>
  );
};

export default AboutMe;