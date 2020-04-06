<script>
if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js');
    }

window.addEventListener('beforeinstallprompt', e => {
        e.userChoice.then(choiceResult => {
          ga('send', 'event', 'Add to Homescreen', choiceResult.outcome);      
        });
      });
</script>