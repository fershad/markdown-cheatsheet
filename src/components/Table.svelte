<script>
    import { data } from '../data/data.js'
</script>

  <div class="table">
  {#each data as row}
      <div class="row">
        <div class="header-md">Type this</div>
        <div class="header-output">To get this</div>
        <div class="content-md">{@html row.md}</div>
        <div class="content-output">{@html row.output}</div>
    </div>
  {/each}
</div>

<style>

code {
    font-family: 'Source Code Pro', monospace;
    font-display: swap;
}
.table {
  width: 100%;
  margin: 0 auto;
  padding: 1.5em 1em;
  max-width: 600px;
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
    border: 1px solid black;
    display: flex;
    align-items: center;
}

div[class^="header-"] {
    justify-content: center;
}

.row:not(:first-child) > div[class^="header-"] {
      display: none;
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