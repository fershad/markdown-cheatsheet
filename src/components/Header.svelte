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
                console.log('dark')
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
    	    <h1 class="header-title">Markdown Cheatsheet</h1>
            <a href="https://www.markdownguide.org/getting-started/" class="bold">What is Markdown?</a>
        </div>
    	<span class="toggle" on:click={toggle}>
            {#if darkMode }
                <button in:fly="{{ x: 50, easing: sineOut, duration: 200, delay: 210 }}" 
                        out:fly="{{ x: -50, easing: sineOut, duration: 200 }}"
                        aria-label="Switch to light mode">
                    <i class="gg-moon"></i>
                </button>
            {:else}
                <button in:fly="{{ x: -50, easing: sineOut, duration: 200, delay: 210 }}" 
                        out:fly="{{ x: -50, easing: sineOut, duration: 200 }}"
                        aria-label="Switch to dark mode">
                        <i class="gg-sun"></i>
                </button>
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
        height: 60px;
        width: 60px;
        display: inline-flex;
        background: var(--background-color);
        border: none;
        border-radius: 5px;
        transition: transform 0.3s;
        overflow: hidden;
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