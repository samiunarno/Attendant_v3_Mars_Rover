// Navbar.js

import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import logoImage from './final_logo.png';
import image1 from './space-car.png';
import rover1 from './rover1.jpg';
import rover2 from './rover2.jpg';
import rover3 from './rover3.jpeg';
import rover4 from './rover4.jpeg';
import rover5 from './rover5.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const customStyle = {
    color: '#009688'
  };
  const customStyled = {
    color: '#ff3e7f'
  };
  const customStyledd = {
    color: '#03a9f4'
  };
  const [ fix, setFix ] = useState(false)
  return (
    <div>
    <nav className="navbar">
      <div className="navbar-logo">
      
      <img src={logoImage} alt="" className="logo-img" />

      
      
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#project details">Project Details</a>
        <a href="#team">Team</a>
        <a href="#achievements">Achievements</a>
        <a href="#gallery">Gallery</a>
        <a href="#outreach&projects">Outreach & Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      
    </nav>
    
    <div>
      <h2 className='text'>WELCOME TO</h2>
      <h1 className='textt'>TEAM ATTENDANT</h1>
      <p className='texttt'>Lorem ipsum dolor sit amet. Non corrupti cupiditate ut tempore </p>
      <p className='textttt'>ipsum sit facere praesentium ut quos nesciunt.Eos consequatur emelt </p>
      <p className='texttttt'>Lorem ipsum dolor sit amet. Non corrupti cupiditate ut tempore</p>
      <p className='textttttt'>ipsum sit facere praesentium ut quos nesciunt.Eos consequatur emelt</p>
      <p className='texttttttt'>Lorem ipsum dolor sit amet. Non corrupti cupiditate ut tempore</p>
      
    </div>
    
    <div className='slider'>
    <div className='list'>
      <div className='item'>
        <img src={rover1}/>
      </div>
      <div className='item'>
        <img src={rover2}/>
      </div>
      <div className='item'>
        <img src={rover3}/>
      </div>
      <div className='item'>
        <img src={rover4}/>
      </div>
      <div className='item'>
        <img src={rover5}/>
      </div>
    </div>
    <div className='buttons'>
      <button id='prev'> {'<'}   </button>
      <button id='next'> {'>'} </button>

    </div>
    <ul className='dots'>
      <li className='active'></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
    <div className='container'>
      <div className='card' style={customStyle}>
        <div className='imgBx'>
        <img src={image1}/>

        </div>
        <div className='content'>
          <h2>MARS ROVER</h2>
          <p>ronaldo ronaldo ronaldo ronaldo ronaldo
          ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo
          ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo suii
          ronaldo ronaldo </p>
          <button href='#' className='button1'>Read More</button>
        </div>
      </div>
      <div className='card' style={customStyled}>
        <div className='imgBx'>
        <img src={image1}/>
        </div>
        <div className='content'>
        <h2>MARS ROVER</h2>
          <p>ronaldo ronaldo ronaldo ronaldo ronaldo
          ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo
          ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo suii
          ronaldo ronaldo </p>
          <button href='#' className='button2'>Read More</button>
        </div>
      </div>
      <div className='card' style={customStyledd}>
        <div className='imgBx'>
        <img src={image1}/>

        </div>
        <div className='content'>
        <h2>MARS ROVER</h2>
          <p>ronaldo ronaldo ronaldo ronaldo ronaldo
          ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo
          ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo suii
          ronaldo ronaldo </p>
          <button href='#' className='button3'>Read More</button>
        </div>
      </div>
    </div>
    
    </div>
  );
};
let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function(){
  if(active + 1 > lengthItems){
    active = 0;
  }
  else{
    active = active + 1 ;
  }
  reloadSlider();
}
prev.onclick = function(){
  if(active - 1 < 0){
    active = lengthItems;
  }
  else{
    active = active - 1 ;
  }
  reloadSlider();
}
let refreshSlider = setInterval(()=>{next.click()},5000);
function reloadSlider(){
  let checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft + 'px';

  let lasActiveDot = document.querySelector('.slider .dots li.active');
  lasActiveDot.classList.remove('active');
  dots[active].classList.add('active');
  clearInterval(refreshSlider);
  refreshSlider = setInterval(()=>{next.click()},3000);
}
dots.forEach((li , key) => {
  li.addEventListener('click', function(){
    active = key;
    reloadSlider();
  })
})

export default Navbar;
