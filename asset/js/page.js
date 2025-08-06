// Geser konten utama ke kanan saat sidebar dibuka
      document.addEventListener('DOMContentLoaded', function () {
        var drawer = document.getElementById('drawer-navigation');
        var mainContent = document.getElementById('main-content-wrapper');
        if (!drawer || !mainContent) return;
        function updateContentMargin() {
          if (!drawer.classList.contains('-translate-x-full')) {
            mainContent.style.marginLeft = drawer.offsetWidth + 'px';
          } else {
            mainContent.style.marginLeft = '';
          }
        }
        updateContentMargin();
        // Observe drawer state
        const observer = new MutationObserver(updateContentMargin);
        observer.observe(drawer, { attributes: true, attributeFilter: ['class'] });
        // Also update on window resize
        window.addEventListener('resize', updateContentMargin);
      });