<script>
    import { data } from '../data/data.js'
</script>

  <div class="table">
  {#each data as row}
      <div class="row">
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