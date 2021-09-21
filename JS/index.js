function changeSlideShowPosition(index) {
  testimonialsIndex = index;

  if (testimonialsIndex >= testimonials.length) {
    testimonialsIndex = 0;
  }

  

  for (let i = 0; i < testimonials.length; i++) {
    if (i != testimonialsIndex) {
      document.querySelector('#list-controller--item-' + i).classList.add('opacity-50');
    }
  }
  
  
  document.querySelector('#list-controller--item-' + testimonialsIndex).classList.remove('opacity-50');

  

  document.querySelector('.quote-user-img').src = testimonials[testimonialsIndex].img;
  document.querySelector('.quote-text').innerText = testimonials[testimonialsIndex].message;
  document.querySelector('.quote-username').innerText = testimonials[testimonialsIndex].name;
  document.querySelector('.quote-user-position').innerText = testimonials[testimonialsIndex].position;
}

function changeSlideShowIndexPosition(index) {
  if (index >= testimonials.length || index <= -1) {
    throw new Error('Invalid index');
  }

  testimonialsIndex = index;
  clearInterval(slideShowIntervalId);
  changeSlideShowPosition(index);
  setTimeout(() => {
    slideShow()
  }, updateTimeSlideShow);
}



function slideShow() {
  slideShowIntervalId = setInterval(() => {
    changeSlideShowPosition(testimonialsIndex);
    testimonialsIndex++;
  }, updateTimeSlideShow);
}

const getActualTheme = () => {
  let theme = localStorage.getItem('theme');

  if (!theme)  {
    localStorage.setItem('theme', 'dark')
    theme = 'dark';
  }
  return theme;
}

const setLightTheme = function () {
  document.querySelector('#theme').href = 'CSS/light-theme.css';
  document.querySelector('.header-container--logo').src= './images/logoLight.svg'
  document.querySelector('.theme-toogle-button--img').src = './images/icon-moon.svg'

  localStorage.setItem('theme', 'light');
}

const setDarkTheme = function () {
  document.querySelector('#theme').href = 'CSS/dark-theme.css';
  document.querySelector('.header-container--logo').src= './images/logo.svg'
  document.querySelector('.theme-toogle-button--img').src = './images/icon-sun.svg'


  localStorage.setItem('theme', 'dark');
}

const setPageTheme = function name(theme) {
  if (theme === 'light') {
    setLightTheme();
  } else {
    setDarkTheme();
  }
}

document.querySelector('.theme-toogle-button--img').addEventListener('click', (e) => {
  const actualTheme = getActualTheme();

  if (actualTheme == 'dark') {
    setLightTheme();
  } else {
    setDarkTheme();
  }
})


let theme = localStorage.getItem('theme');
let slideShowIntervalId = 0;
let testimonialsIndex = 0;
const updateTimeSlideShow = 2000;

const testimonials = [
  {
    img: './images/profile-1.jpg',
    name: 'Satish Patel',
    position: 'Founder & CEO, Huddle',
    message: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
  },
  {
    img: './images/profile-2.jpg',
    name: 'Bruce McKenzie',
    position: 'Founder & CEO, Huddle',
    message: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
  },
  {
    img: './images/profile-3.jpg',
    name: 'Iva Boyd',
    position: 'Founder & CEO, Huddle',
    message: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
  }
]



setPageTheme(getActualTheme());
slideShow();


