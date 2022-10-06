import React from 'react'

function Services() {
  return (
    <section class="my-services" id="services">
        <h1 class="section__title section__title--services">What I do</h1>     
        <div class="services">
            <div class="service">
                <h3>Full Stack Developer</h3>
                <p>
                    Build and Design web application using :                   
                    HTML, CSS Javascript, React.js 
                    (with Redux & Hooks), Node.js, Express.js and PostgreSQL.
                </p>
            </div>      
            <div class="service">
                <h3>Mechanical Engineer</h3>
                <p>
                    Design 3D models (parts, assemblies & assets), 
                    renderings (videos and pictures) and 2D drawings.
                    According to your requirements.
                </p>
            </div>      
            <div class="service">
                    <h3>3D Modeling</h3>
                    <p>
                        Design and model 3D assets, textures, model rigging, videos
                    </p>
            </div>      
        </div>  
        <a href="#work" class="btn">My Work</a>
    </section>
  )
}

export default Services