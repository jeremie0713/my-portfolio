/*=============== HOME SPLIT TEXT ===============*/
const { animate, text, stagger } = anime;

const { chars: chars1 } = text.split('.home__profession-1', { chars: true });
const { chars: chars2 } = text.split('.home__profession-2', { chars: true });

animate(chars1, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});
animate(chars2, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});

/*=============== SWIPER PROJECTS ===============*/
const swiperProjects = new Swiper('.projects__swiper', {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  grabbCursor: true,
  speed: 600,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

/*=============== WORK TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');

      tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const targetSelector = tab.dataset.target,
                  targetContent = document.querySelector(targetSelector);

            //Disable all content and active tabs
            tabContents.forEach((content) => content.classList.remove('experience-active'));
            tabs.forEach((t) => t.classList.remove('experience-active'));

            //Activate the tab and the corresponding content
            tab.classList.add('experience-active');
            targetContent.classList.add('experience-active');

        })});


// document.addEventListener('DOMContentLoaded', function() {
//     const tabs = document.querySelectorAll('[data-target]');
//     const tabContents = document.querySelectorAll('[data-content]');

//     tabs.forEach(tab => {
//         tab.addEventListener('click', () => {
//             const target = document.querySelector(tab.dataset.target);
            
//             // Remove active class from all content
//             tabContents.forEach(tc => {
//                 tc.classList.remove('work__active');
//             });
            
//             // Add active class to target content
//             if(target) {
//                 target.classList.add('work__active');
//             }

//             // Remove active class from all tabs
//             tabs.forEach(t => {
//                 t.classList.remove('work__active');
//             });
            
//             // Add active class to clicked tab
//             tab.classList.add('work__active');
//         });
//     });
// });

/*=============== SKILLS ACCORDION ===============*/
const skillsButtons = document.querySelectorAll('.skills__button');

skillsButtons.forEach((button) => {
  const heightInfo = document.querySelector('.skills__info');

  heightInfo.style.height = heightInfo.scrollHeight + 'px';

  button.addEventListener('click', () => {
    const skillsCards = document.querySelectorAll('.skills__card'),
          currentCard = button.parentNode,
          currentInfo = currentCard.querySelector('.skills__info'),
          isCardOpen = currentCard.classList.contains('skills-open');

    skillsCards.forEach((card) => {
      card.classList.replace('skills-open', 'skills-close');

      const info = card.querySelector('.skills__info');
            info.style.height = '0';
    });

    if (!isCardOpen) {
      currentCard.classList.replace('skills-close', 'skills-open');
      currentInfo.style.height = currentInfo.scrollHeight + 'px';
    }
  })
});


/*=============== COPY EMAIL IN CONTACT ===============*/
const copyBtn = document.getElementById('contact-btn'),
      copyEmail = document.getElementById('contact-email').textContent;

      copyBtn.addEventListener('click', () => {
          navigator.clipboard.writeText(copyEmail).then(() => {
            copyBtn.innerHTML = 'Email Copied! <i class="ri-check-line"></i>';

            setTimeout(() => {
              copyBtn.innerHTML = 'Copy Email <i class="ri-file-copy-line"></i>';
            }, 2000);
          });
      });

/*=============== CURRENT YEAR OF THE FOOTER ===============*/ 
const textYear = document.getElementById('footer-year'),
      currentYear = new Date().getFullYear();

textYear.textContent = currentYear;

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const id = section.id,
          top = section.offsetTop - 50,
          height = section.offsetHeight,
          link = document.querySelector('.nav__menu a[href*=' + id + ']');

        if (!link) return;

        link.classList.toggle('active-link', scrollY >= top && scrollY < top + height - 100);

  })};

window.addEventListener('scroll', scrollActive);

/*=============== CUSTOM CURSOR ===============*/
const cursor = document.querySelector('.cursor');
let mouseX = 0, mouseY = 0;

const cursorMove = () => {
  cursor.style.left = `${mouseX}px`;
  cursor.style.top = `${mouseY}px`;
  cursor.style.transform = 'translate(-50%, -50%)';
  cursor.style.zIndex = '9999';

  requestAnimationFrame(cursorMove);
}

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
})

cursorMove();

/* Hide custom cursor on links */
const a = document.querySelectorAll('a');

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hide-cursor');
  })
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hide-cursor');
  })
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true,
});

sr.reveal(`.home__image, .projects__container, .work__container, .contact__container`);
sr.reveal(`.home__data`, { delay: 900, origin: 'bottom' });
sr.reveal(`.home__info`, { delay: 1200, origin: 'bottom' });
sr.reveal(`.home_social, .home__cv`, {delay: 1500});
sr.reveal(`.about__data`, {origin: 'left'});
sr.reveal(`.about__image`, {origin: 'right'});
sr.reveal(`.skills__card`, {interval: 100});