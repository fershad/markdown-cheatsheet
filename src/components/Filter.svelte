<script>
    import Button from './Button.svelte'
    import { filters } from '../store.js';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    let filterString;

    function filtered(tag, state) {
        dispatch('filtered', {tag, state});
    }
</script>

<div class="filter">
    <!-- <input type="text" name="search" id="search"> -->
    <!-- <h2>
        Show only
    </h2> -->
    <div class="buttons">
        <div class="filters">
        <strong>Show: </strong>
            {#if $filters.length > 0}
                {#each $filters as item}
                    <span class="tag">{item}</span>
                {/each}
            {:else}
                 <span class="tag">All</span>
            {/if}
        </div>
        <Button tag="heading" label="headings" icon="format-heading" on:filter={(event) => {filtered(event.detail.message, event.detail.state)}}/>
        <Button tag="list" label="lists" icon="layout-list" on:filter={(event) => {filtered(event.detail.message, event.detail.state)}}/>
        <Button tag="text" label="text" icon="format-text" on:filter={(event) => {filtered(event.detail.message, event.detail.state)}}/>
        <Button tag="link" label="links" icon="link" on:filter={(event) => {filtered(event.detail.message, event.detail.state)}}/>
        <Button tag="table" label="tables" icon="display-grid" on:filter={(event) => {filtered(event.detail.message, event.detail.state)}}/>
        <Button tag="image" label="images" icon="image" on:filter={(event) => {filtered(event.detail.message, event.detail.state)}}/>
        <Button tag="code" label="code" icon="code" on:filter={(event) => {filtered(event.detail.message, event.detail.state)}}/>
        <Button tag="underline" label="underline" icon="border-style-solid" on:filter={(event) => {filtered(event.detail.message, event.detail.state)}}/>
    </div>
</div>

<style>
    .filter {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        margin-top: 3em;
    }

    .buttons {
        display: flex;
        position: relative;
        align-items: center;
        padding: 1em 0 3.4em 0;
        /* border: 2px solid var(--table-header-bg); */
        border-radius: 5px;
    }

    .buttons > .filters {
        position: absolute;
        bottom: 8px;
        left: 20px;
        padding: 5px;
    }

    .filters > .tag {
        background: var(--strong-accent-color);
        color: #FFFFFF;
        border-radius: 5px;
        font-weight: 600;
        margin: 0 5px;
        padding: 2px 5px;
    }
</style>