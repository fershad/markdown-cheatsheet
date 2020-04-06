<script>
if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js');
    }

window.addEventListener('beforeinstallprompt', e => {
        e.userChoice.then(choiceResult => {
          gtag('event', 'Install', {'event_category' : 'Add to Homescreen', 'event_label' : choiceResult.outcome});      
        });
      });

window.addEventListener('load', () => {
        if (navigator.standalone) {
          gtag('event', 'Views', {'event_category' : 'PWA', 'event_label' : 'iOS'});
        } else if (matchMedia('(display-mode: standalone)').matches) {
          gtag('event', 'Views', {'event_category' : 'PWA', 'event_label' : 'non-iOS'});
        } else {
          gtag('event', 'Views', {'event_category' : 'PWA', 'event_label' : 'non-iOS'});
        }
      });
</script>