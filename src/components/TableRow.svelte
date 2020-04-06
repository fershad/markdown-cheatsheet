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
                    {#if data.alternate.length > 1}
                      Alternatives   
                    {:else}
                      Alternative
                    {/if}
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
                Show {#if data.alternate.length > 1}
                      alternatives   
                    {:else}
                      alternative
                    {/if}
            {/if}
           </button>
        {/if}
      </div>
      <div class="result-wrapper">
      <span class="tag">Result</span>
        <div class="result">
             {@html data.output}
        </div>
      </div>
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
      align-items: center;
      position: relative;
      padding: 3rem 1rem 1rem 1rem;
    }

      .main, .alt, .result {
        padding: 3em 1em 1em 1em;
        width: 100%;
        position: relative;
      }
.result-wrapper {
  position: relative;
  .tag {
        background: var(--alternate-accent-color);
        color: #FFFFFF;
    }
}

.tag {
        position: absolute;
        top: 10px;
        left: 0;
        padding: 5px 15px;
    }
.md-wrapper {
    border-bottom: 2px solid var(--text-color);
    position: relative;

    .tag {
        background: var(--strong-accent-color);
        color: #FFFFFF;
    }
}

button {
        display: inline-flex;
        background: var(--background-color);
        border: none;
        margin-left: 1em;
        border-radius: 5px;
        transition: transform 0.3s;
        color: var(--alternate-accent-color);
        text-decoration: underline;
        cursor: pointer;
        padding-left: 0;

        &.showAlt, &.showHTML {
          color: var(--strong-accent-color); 
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

    .result {
          min-height: 90px;
    }

    
  }
  </style>