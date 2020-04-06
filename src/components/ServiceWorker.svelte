<script>
if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js');
    }

window.addEventListener('appinstalled', (evt) => {
  gtag('event', 'Install');
});

window.addEventListener('load', () => {
        if (navigator.standalone) {
          gtag('event', 'Views', {'event_category' : 'PWA', 'event_label' : 'iOS'});
          console.log('Launched: Installed (iOS)');
        } else if (matchMedia('(display-mode: standalone)').matches) {
          gtag('event', 'Views', {'event_category' : 'PWA', 'event_label' : 'non-iOS'});
          console.log('Launched: Installed');
        } else {
          gtag('event', 'Views', {'event_category' : 'Web'});
          console.log('Launched: Browser Tab');
        }
      });
</script>