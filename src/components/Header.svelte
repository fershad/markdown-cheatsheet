<script>
    import { fly } from "svelte/transition";
    import { sineOut } from "svelte/easing";

    let darkMode = false;
        
    function toggle() {
        darkMode = !darkMode;
        window.document.body.classList.toggle('dark');
    }
</script>

<header>
    <div class="container">
        <div class="heading-wrapper">
    	    <h1 class="header-title">Markdown Cheatsheet</h1>
            <a href="https://www.markdownguide.org/getting-started/">What is Markdown?</a>
        </div>
    	<span class="toggle" on:click={toggle}>
            {#if darkMode }
                <button in:fly="{{ x: 100, easing: sineOut, duration: 300, delay: 310 }}" out:fly="{{ x: 100, easing: sineOut, duration: 300 }}"><i class="gg-moon"></i></button>
            {:else}
                <button in:fly="{{ x: -100, easing: sineOut, duration: 300, delay: 310 }}" out:fly="{{ x: -100, easing: sineOut, duration: 300 }}"><i class="gg-sun"></i></button>
            {/if}
        </span>
    </div>
</header>

<style>
    header {
        width: 100%;
        height: 10vh;
    }

    header > .container {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .heading-wrapper {
        text-align: center;
    }

    .header-title {
        margin: 0;
        color: var(--text-color);
        font-family: 'Permanent Marker', cursive;
        font-display: swap;
    }

    .toggle {
        position: absolute;
        cursor: pointer;
        right: 20px;
        overflow: hidden;
    }

    .toggle > button {
        height: 40px;
        width: 40px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }


    /* Icons */

</style>