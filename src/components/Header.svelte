<script>
    import { fly } from "svelte/transition";
    import { sineOut } from "svelte/easing";
    import { onMount } from 'svelte';
    let darkMode;

    onMount(() => {
        darkMode = checkTheme();
        if (darkMode) {
            window.document.body.classList.toggle('dark');
        }
    })
    
    function checkTheme() {
        if (localStorage.getItem('md-cheatsheet-theme') !== null) {
            let theme = localStorage.getItem('md-cheatsheet-theme');
            return setTheme(theme)
        } else {
            try {
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    localStorage.setItem('md-cheatsheet-theme', 'dark');
                    return true;
                } else {
                    localStorage.setItem('md-cheatsheet-theme', 'light');
                    return false;
                }
            } catch (error) {
                console.log(error);
            }
        }
        
        return false;
    }

    function setTheme(t) {
        if (t == 'light') {
                return false;
            } else if (t == 'dark') {
                return true;
            } else {
                return false;
            }
    }
        
    function toggle() {
        darkMode = !darkMode;
        switch (darkMode) {
            case true:
                localStorage.setItem('md-cheatsheet-theme', 'dark');
                break;
            case false:
                localStorage.setItem('md-cheatsheet-theme', 'light');        
                break;
        }
        window.document.body.classList.toggle('dark');
    }
</script>

<header>
    <div class="container">
        <div class="heading-wrapper">
    	    <h1 class="header-title"><span class="orange">Markdown</span> Cheat Sheet</h1>
            <a href="https://www.markdownguide.org/getting-started/" class="bold">What is Markdown?</a>
            <p>This cheat sheet is based on the <a href="https://commonmark.org/">CommonMark</a> specification.</p>
        </div>
    	<span class="toggle">
            {#if darkMode }
                <button in:fly="{{ x: 25, easing: sineOut, duration: 100, delay: 110 }}" 
                        out:fly="{{ x: 25, easing: sineOut, duration: 100 }}"
                        aria-label="Switch to light mode"
                        on:click={toggle} tabindex="0">
                    <i class="gg-moon"></i>
                </button>
            {:else}
                <button in:fly="{{ x: -25, easing: sineOut, duration: 100, delay: 110 }}" 
                        out:fly="{{ x: -25, easing: sineOut, duration: 100 }}"
                        aria-label="Switch to dark mode"
                        on:click={toggle} tabindex="0">
                        <i class="gg-sun"></i>
                </button>
            {/if}
        </span>
    </div>
</header>

<style>
    header {
        width: 100%;
        min-height: 10vh;
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

    @media (max-width: 600px) {
        .heading-wrapper {
            margin-top: 40px;
        }
    }

    .orange {
        color: var(--strong-accent-color);
    }

    .header-title {
        color: var(--text-color);
        font-family: 'Permanent Marker', cursive;
        font-display: swap;
    }

    .toggle {
        position: absolute;
        cursor: pointer;
        right: 20px;
        top: 20px;
        overflow: hidden;
        height: 60px;
        width: 60px;
    }

    .toggle > button {
        height: 60px;
        width: 60px;
        display: inline-flex;
        background: var(--background-color);
        border: none;
        border-radius: 5px;
        transition: transform 0.3s;
        overflow: hidden;
        cursor: pointer;
    }

    i {
        margin: auto;
    }

    .gg-moon {
        color: var(--alternate-accent-color);
    }

    .gg-sun {
        color: var(--strong-accent-color);
    }

    /* Icons */

</style>