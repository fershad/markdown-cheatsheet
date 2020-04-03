<script>
    import { onMount, afterUpdate } from "svelte/internal";
    import { data } from '../data/data.js';
    import { filters } from '../store.js';
    import Filter from './Filter.svelte';
    import { fade } from "svelte/transition";

    $: filteredData = data;
    $filters = [];

    function runFilter(tag, state) {
      if (state) {
        $filters = [...$filters, tag.tag];
      } else {
        $filters = $filters.filter((el) => { 
          return el !== tag.tag 
        });
      }

      if ($filters.length > 0) {
        filteredData = data.filter((el) => {
          return el.tags.some((t) => { 
                return $filters.indexOf(t) >= 0
            })
        });
      } else {
        filteredData = data;
      }
}
</script>

<Filter on:filtered={(event) => {runFilter(event.detail.tag, event.detail.state)}}/>

<div class="data">
{#each filteredData as data}
    <div class="item" data-tags="{data.tags}" transition:fade>
      <div class="md">
        <div class="main"><pre><code>{data.md}</code></pre></div>
        <!-- {#if data.alternate }
          {#each data.alternate as alt} 
            <div class="alt"><pre><code>{alt}</code></pre></div>
          {/each}
        {/if} -->
      </div>
      <div class="result"><span class="output">{@html data.output}</span></div>
  </div>
{/each}
</div>

<style lang="scss">
  .data {
    width: 100%;
    margin: 0 auto;
    padding: 1.5em 1em;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(150px, max-content));
  }

  .item {
    border: 2px solid var(--text-color);
    margin: 1em 1.25em;
    border-radius: 5px;
    overflow: hidden;
    height: max-content;
   .result {
      padding: 0.5rem 1rem;
      display: inline-flex;
      align-items: center;
      position: relative;
    }

    .output:before, .main:before {
        position: absolute;
        top: 10px;
        left: 0;
        padding: 5px 15px;
      }

    .md {
      display: flex;
      border-bottom: 2px solid var(--text-color);

      pre {
        margin: 0;
        padding: 0;
      }

      .main, .alt, .result {
        padding: 3em 1em 1em 1em;
      }

      .main {
        // border: 2px solid var(--text-color);
        width: 100%;
        position: relative;
      }

      .main:before {
        content: 'Markdown';
        background: var(--strong-accent-color);
        color: #FFFFFF;
      }
    }
    .output:before {
        content: 'Result';
        background: var(--alternate-accent-color);
        color: #FFFFFF;
      }

    .result {
          width: 100%;
          min-height: 90px;
    }
  }
</style>