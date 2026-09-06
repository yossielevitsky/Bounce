// Bounce Website - Clean Mobile Navigation
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-link, .btn-mobile-block, .mobile-nav-btn');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        mobileDrawer.classList.remove('open');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      } else {
        mobileDrawer.classList.add('open');
        mobileMenuBtn.classList.add('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!mobileDrawer.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        if (mobileDrawer.classList.contains('open')) {
          mobileDrawer.classList.remove('open');
          mobileMenuBtn.classList.remove('active');
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });
  }

  // Active state for navigation links on scroll
  const sections = document.querySelectorAll('section[id], header[id], footer[id]');
  const desktopLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(sec => {
      const top = sec.offsetTop - 110;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        desktopLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });

    if (scrollPos < 100) {
      desktopLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#header') {
          link.classList.add('active');
        }
      });
    }
  });
});
