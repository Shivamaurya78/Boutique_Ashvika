 
    // ─── Navbar scroll ───
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });

    // ─── Hamburger menu ───
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    function closeMobile() {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }

    // ─── Scroll Reveal ───
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach(el => observer.observe(el));

    // ─── Active nav link highlight ───
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(sec => {
        const top = sec.offsetTop - 100;
        if (window.scrollY >= top) current = sec.getAttribute('id');
      });
      navLinksAll.forEach(link => {
        link.style.color = link.getAttribute('href') === '#' + current ? 'var(--rose)' : '';
      });
    });

    // ─── Smooth hero animation on load ───
    window.addEventListener('DOMContentLoaded', () => {
      document.querySelector('.hero-text').style.opacity = '0';
      document.querySelector('.hero-text').style.transform = 'translateY(30px)';
      setTimeout(() => {
        document.querySelector('.hero-text').style.transition = 'opacity .9s ease, transform .9s ease';
        document.querySelector('.hero-text').style.opacity = '1';
        document.querySelector('.hero-text').style.transform = 'none';
      }, 150);
    });
  