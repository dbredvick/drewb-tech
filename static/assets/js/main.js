window.onGatsbyInitialClientRender = function () {
  /**
   * Main JS file for theme behaviours
   */

  // Responsive video embeds
  var videoEmbeds = [
    'iframe[src*="youtube.com"]',
    'iframe[src*="vimeo.com"]'
  ];
  reframe(videoEmbeds.join(','));

  // Mobile menu
  var menuToggle = document.querySelectorAll('.menu-toggle');
  if (menuToggle) {
    for (var i = 0; i < menuToggle.length; i++) {
      menuToggle[i].addEventListener('click', function (e) {
        document.body.classList.toggle('menu--opened');
        e.preventDefault();
      }, false);
      menuToggle[i].addEventListener('touchend', function (e) {
        document.body.classList.toggle('menu--opened');
        e.preventDefault();
      }, false);
    }
    window.addEventListener('resize', function () {
      if (menuToggle.offsetParent === null) {
        document.body.classList.remove('menu--opened');
      }
    }, true);
  }
};