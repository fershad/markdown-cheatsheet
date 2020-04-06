<script>
      if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js');
    }
</script>

<footer>
	<div class="container">
        <p>Build by <a href="//www.fershad.com">Fershad Irani</a> using <a href="//svelte.dev/">Svelte 3</a>. Icons from <a href="//css.gg">CSS.gg</a> | <a href="//github.com/fishintaiwan/markdown-cheatsheet">Source</a></p>
        <p>If you found this helpful then please consider buying me a coffee.</p>
        <a class="bmc-button" rel="noopener" target="_blank" href="https://www.buymeacoffee.com/fishintaiwan"><img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee"><span style="margin-left:15px;font-size:28px;">Buy me a coffee</span></a>
    </div>
</footer>

<style>
    footer {
        min-height: 10vh;
        padding: 1.5em 0;
        width: 100%;
        border-top: 1px solid var(--quiet-color);
        background: var(--quiet-color);
    }

    footer > .container {
        padding-top: 0;
    }

    .bmc-button img{height: 34px;width: 35px;margin-bottom: 1px;border: none;vertical-align: middle;}.bmc-button{padding: 7px 10px 7px 10px;line-height: 35px;height:51px;min-width:217px;text-decoration: none;display:inline-flex;color:#ffffff;background-color:#FF813F;border-radius: 5px;border: 1px solid transparent;padding: 7px 10px 7px 10px;font-size: 28px;letter-spacing:0.6px;margin: 0 auto;font-family:'Cookie', cursive;box-sizing: border-box;-o-transition: 0.3s all linear;-webkit-transition: 0.3s all linear;-moz-transition: 0.3s all linear;-ms-transition: 0.3s all linear;transition: 0.3s all linear;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {text-decoration: none;;opacity: 0.85;color:#ffffff;}

</style>