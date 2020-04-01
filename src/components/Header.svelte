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
.gg-sun {
	box-sizing: border-box;
	position: relative;
	display: block;
	transform: scale(var(--ggs,1));
	width: 24px;
	height: 24px;
	background:
	  linear-gradient(to bottom,
		  currentColor 4px,transparent 0)
		  no-repeat 5px -6px/2px 6px,
	  linear-gradient(to bottom,
		  currentColor 4px,transparent 0)
		  no-repeat 5px 14px/2px 6px,
	  linear-gradient(to bottom,
		  currentColor 4px,transparent 0)
		  no-repeat -8px 5px/6px 2px,
	  linear-gradient(to bottom,
		  currentColor 4px,transparent 0)
		  no-repeat 14px 5px/6px 2px;
	border-radius: 100px;
	box-shadow: inset 0 0 0 2px;
	border: 6px solid transparent
  }
  .gg-sun::after,
  .gg-sun::before {
	content: "";
	display: block;
	box-sizing: border-box;
	position: absolute;
	width: 24px;
	height: 2px;
	border-right: 4px solid;
	border-left: 4px solid;
	left: -6px;
	top: 5px
  }
  .gg-sun::before {
	transform: rotate(-45deg)
  }
  .gg-sun::after {
	transform: rotate(45deg)
  }

  .gg-moon,
.gg-moon::after {
    display: block;
    box-sizing: border-box;
    border-radius: 50%
}
.gg-moon {
    overflow: hidden;
    position: relative;
    transform: rotate(-135deg) scale(var(--ggs,1));
    width: 20px;
    height: 20px;
    border: 2px solid;
    border-bottom-color: transparent
}
.gg-moon::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 18px;
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px;
    top: 8px;
    left: 2px
}
</style>