<script>
    
    import { data } from '../data/data.js';
    import { filters } from '../store.js';
    import Filter from './Filter.svelte';
    import TableRow from './TableRow.svelte';

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
    <TableRow data={data}/>
{/each}
</div>

<style lang="scss">
  .data {
    width: 100%;
    margin: 0 auto;
    padding: 1.5em 1em;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(150px, max-content));
    grid-column-gap: 1em;
    grid-row-gap: 1.5em;
  }

</style>