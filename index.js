let menuA = document.querySelectorAll('.menu a');
let section =  document.querySelectorAll('section');


window.onscroll = function (){
  section.forEach(sec => {

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let secTop = sec.offsetTop;
    let id = sec.getAttribute('id');

    if(top >= secTop && top < secTop + height ){

      menuA.forEach(links => {
        links.classList.remove('actives')
        document.querySelector('header .menu a[href*='+id+']').classList.add('actives');
      })
    }
  })
}

let boxIcon = document.querySelectorAll('.boxIcon i');
let mboxIcon = document.querySelectorAll('.mboxIcon i')
let togle = false
boxIcon.forEach(icons => {
     icons.addEventListener('click', () => {
       togle=!togle
       if(togle){
       icons.style.backgroundColor='var(--green)';
       icons.style.color='var(--white)';
       }else{
        icons.style.backgroundColor='#eee';
        icons.style.color='var(--balck)';
       }
     })
})

mboxIcon.forEach(heart => {
  heart.addEventListener('click', () => {
    togle=!togle
    if(togle){
      heart.style.backgroundColor='var(--green)';
      heart.style.color='var(--white)';
      }else{
        heart.style.backgroundColor='#eee';
        heart.style.color='var(--balck)';
      }
  })
})




var swiper = new Swiper(".home-container", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


  let searchIcon = document.querySelector('#searchIicon'),
      searchBx = document.querySelector('.searchBx'),
      closeIcon = document.querySelector('#close'),
      menuBars = document.querySelector('#menu-bars'),
      menu = document.querySelector('.menu');
      

  searchIcon.addEventListener('click', () => {
        searchBx.classList.toggle('active');
  })

  closeIcon.addEventListener('click', () => {
    searchBx.classList.remove('active')
  })

  menuBars.addEventListener('click', () => {
    togle=!togle
      menu.classList.toggle('active');
      if(togle){
      menuBars.setAttribute('class','fas fa-times');
      }else{
        menuBars.setAttribute('class','fas fa-bars');
      }
  })


  function addActive(){
    document.querySelector('.loader-container').classList.add('active');
  }

  function removeActive(){
    setInterval(addActive, 3000)
  }

  window.onload = removeActive;





