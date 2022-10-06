import React from 'react';

function Footer() {
  return (
    <footer>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shovz12@gmail.com" class="footer__link">shovz12@gmail.com</a>
        <ul class="social-list">

            <li class="social-list__item">
                <a class="social-list__link" href="https://www.youtube.com/">
                    <i class="fa-brands fa-google-drive"></i>
                </a>
            </li>

            <li class="social-list__item">
                <a class="social-list__link" href="https://github.com/shovz">
                    <i class="fa-brands fa-github"></i>
                </a>
            </li>

            <li class="social-list__item">
                <a class="social-list__link" href="https://www.linkedin.com/in/shoval-zvulun/">
                    <i class="fa-brands fa-linkedin-in"></i>
                </a>
            </li>  
        </ul>
    </footer>
  )
}

export default Footer;