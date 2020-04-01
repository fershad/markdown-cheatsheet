<script>
</script>

  <div class="table">
      <div class="row">
        <div class="header-md">Type this</div>
        <div class="header-output">To get this</div>
        <div class="content-md"><code># Heading 1</code></div>
        <div class="content-output"><h1>Heading 1</h1></div>
    </div>
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
  margin: 1em 0;
  display: grid;
  height: 100%;
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