import React from 'react';

function Header() {
  return (
    <div style={{margin:'10px 0'}}>
        <button class="nav-toggle" aria-label="toggle navigation">
            <span class="hamburger"></span>
        </button>
        <nav>
            <ul class="nav__list">
                <li class="nav__item Home"><a href="#home" class="nav__link">Home</a></li>
                <li class="nav__item Home"><a href="#services" class="nav__link">Services</a></li>
                <li class="nav__item Home"><a href="#about" class="nav__link">About Me</a></li>
                <li class="nav__item Home"><a href="#work" class="nav__link">My Work</a></li>
            </ul>
        </nav>
    </div>
  );
};

export default Header;