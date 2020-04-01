<script>
    import { data } from '../data/data.js';
    import Filter from './Filter.svelte';
    let filterCounter = 0;

    $: filteredData = data;

    function runFilter(tag, state) {
      // debugger
      if (state) {
        filterCounter = filterCounter + 1;
      } else {
        filterCounter = filterCounter - 1;
      }

      if (filterCounter == 1) {
        filteredData = [];
      }

      if (filterCounter > 0){
        data.forEach(d => {
          let dTags = d.tags;
          dTags.forEach(t => {
            if (t == tag.tag) {
              filteredData.push(d);
            }
          })
        });
      } else {
        filteredData = data;
      }
    }
</script>

<Filter on:filtered={(event) => {runFilter(event.detail.tag, event.detail.state)}}/>

<div class="table">
{#each filteredData as row}
    <div class="row" data-tags="{row.tags}">
      <div class="header-md h4">Type this</div>
      <div class="header-output h4">To get this</div>
      <div class="content-md"><pre><code>{row.md}</code></pre></div>
      <div class="content-output">{@html row.output}</div>
  </div>
{/each}
</div>

<style>

.table {
  width: 100%;
  margin: 0 auto;
  padding: 1.5em 1em;
  max-width: 1080px;
}

.table > .row {
  /* margin: 1em 0; */
  margin: 0;
  display: grid;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "h-md h-output"
                       "c-md c-output"
}

div[class^="header-"], div[class^="content-"]{
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
}

div[class^="header-"] {
    justify-content: center;
    font-weight: 600;
    background-color: var(--table-header-bg);
    color: var(--table-header-text);
}

.row > .header-md {
  border-right: 2px solid var(--table-header-text);
}

.row > .content-md {
  border-right: 2px solid var(--text-color);
}

.row:not(:first-child) > div[class^="header-"] {
      display: none;
}

.row:nth-of-type(even) {
  background-color: var(--table-even-rows);
}


.header-md {
    grid-area: h-md;
  }
.header-output {
    grid-area: h-output;
  }
.content-md {
    grid-area: c-md;
  }
.content-output {
    grid-area: c-output;
  }
</style>