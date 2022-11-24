var nav = document.querySelector('nav');

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
          nav.classList.add('alert-danger', 'shadow');
        } else {
          nav.classList.remove('alert-danger', 'shadow');
        }
      });