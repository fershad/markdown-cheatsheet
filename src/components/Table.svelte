<script>
    import { onMount, afterUpdate } from "svelte/internal";
    import { data } from '../data/data.js';
    import { filters } from '../store.js';
    import Filter from './Filter.svelte';

    $filters = [];

    const newData = data.map((d) => {
      return {
        ...d,
        tags: d.tags.toString().replace(',', ' ')
      }
    })

    function runFilter(tag, state) {
      if (state) {
        $filters = [...$filters, '.' + tag.tag];
      } else {
        $filters = $filters.filter((el) => { 
          return el !== '.' + tag.tag 
        });
      }

      if ($filters.length > 0) {
        console.log($filters);
        iso.arrange({ filter: $filters.toString() });
      } else {
        iso.arrange({ filter: '*' });
      }
}

  import Isotope from "isotope-layout";

  let grid;
  let iso;

  onMount(async () => {
    iso = new Isotope( grid, {
      itemSelector: '.item',
      layoutMode: 'fitRows'
    });
  });

  afterUpdate(() => {
    
	});
</script>

<Filter on:filtered={(event) => {runFilter(event.detail.tag, event.detail.state)}}/>

<div class="data" bind:this={grid}>
{#each newData as d}
    <div class="item grid-sizer {d.tags}">
      <div class="md">
        <div class="main"><pre><code>{d.md}</code></pre></div>
        {#if d.alternate }
          {#each d.alternate as alt} 
            <div class="alt"><pre><code>{alt}</code></pre></div>
          {/each}
        {/if}
      </div>
      <div class="result"><span class="output">{@html d.output}</span></div>
  </div>
{/each}
</div>

<style lang="scss">
  .data {
    width: 100%;
    margin: 0 auto;
    padding: 1.5em 1em;
  }

  .grid-sizer {
    width: 20%;
  }

  .item {
    border: 2px solid var(--text-color);
    margin: 1em 1.25em;
    border-radius: 5px;
    overflow: hidden;
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
      flex-direction: column;
      border-bottom: 2px solid var(--text-color);

      .main, .alt {
        padding: 3em;
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

    .result, .output {
          width: 100%;
    }

    .output > * {
      margin: 0;
    }

    .output {
      display: inline-flex;
      align-items: center;
    }
  }
</style>