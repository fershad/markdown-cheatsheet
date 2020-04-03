<script>
import { onMount } from "svelte/internal";
    export let data;

    let showAlt;
    let showMain = true;

    function showAltToggle(){
    showAlt = !showAlt;
    showMain = !showMain;
}
</script>

<div class="item" data-tags="{data.tags}">
      <div class="md-wrapper">
          <div class="md">
            <span class="tag" class:showAlt>
                {#if showAlt}
                    Alternative
                {:else}
                    Markdown
                {/if}
            </span>
            <div class="main" class:showMain><pre><code>{data.md}</code></pre></div>
            {#each data.alternate as alt} 
              <div class="alt" class:showAlt><pre><code>{alt}</code></pre></div>
            {/each}
          </div>
          {#if data.alternate.length > 0}
          <button on:click={showAltToggle} class:showAlt>
            {#if showAlt}
                Show original
            {:else}
                Show alternative
            {/if}
           </button>
        {/if}
      </div>
      <div class="result">{@html data.output}</div>
  </div>

  <style lang="scss">
  .item {
    border: 2px solid var(--text-color);
    // margin: 1em 1.25em;
    border-radius: 5px;
    overflow: hidden;
    height: max-content;
    width: 100%;
    box-shadow: 0 1px 1px var(--box-shadow-rgba),
              0 2px 2px var(--box-shadow-rgba),
              0 4px 4px var(--box-shadow-rgba),
              0 6px 8px var(--box-shadow-rgba),
              0 8px 16px var(--box-shadow-rgba);

   .result {
      display: inline-flex;
      align-items: center;
      position: relative;
      padding: 3rem 1rem 1rem 1rem;
    }

    .result:before {
        position: absolute;
        top: 10px;
        left: 0;
        padding: 5px 15px;
      }
      .main, .alt, .result {
        padding: 3em 1em 1em 1em;
        width: 100%;
        position: relative;
      }

.md-wrapper {
    border-bottom: 2px solid var(--text-color);
    position: relative;

    button {
        display: inline-flex;
        background: var(--background-color);
        border: 2px solid var(--text-color);
        margin-left: 20px;
        border-radius: 5px;
        transition: transform 0.3s;
        color: var(--text-color);

        &.showAlt {
            border-color: var(--alternate-accent-color);
            background-color: var(--button-active-color);
        }
    }

    .tag {
        position: absolute;
        top: 10px;
        left: 0;
        padding: 5px 15px;
        background: var(--strong-accent-color);
        color: #FFFFFF;
    }

    .tag.showAlt {
        background: var(--quiet-color);
        color: var(--text-color);
    }
}

    .md {
      display: flex;

      pre {
        margin: 0;
        padding: 0;
      }

      .main, .alt {
        display: none;
      }

      .main.showMain, .alt.showAlt {
          display: block;
      }        
    }
    .result:before {
        content: 'Result';
        background: var(--alternate-accent-color);
        color: #FFFFFF;
      }

    .result {
          min-height: 90px;
    }

    
  }
  </style>