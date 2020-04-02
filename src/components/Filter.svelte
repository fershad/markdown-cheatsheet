<script>
    import Button from './Button.svelte'
    import { filters } from '../store.js';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

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
        <span class="filters">
            {#if $filters.length > 0}
                Filters: Showing {$filters.join(', ')}
            {:else}
                 Filters: Showing all
            {/if}
        </span>
        <Button tag="heading" label="headings" icon="format-heading" on:filter={(event) => {filtered(event.detail.message, event.detail.state)}}/>
        <Button tag="list" label="lists" icon="layout-list" on:filter={(event) => {filtered(event.detail.message, event.detail.state)}}/>
        <Button tag="text" label="text" icon="format-text" on:filter={(event) => {filtered(event.detail.message, event.detail.state)}}/>
        <Button tag="link" label="links" icon="link" on:filter={(event) => {filtered(event.detail.message, event.detail.state)}}/>
        <Button tag="table" label="tables" icon="display-grid" on:filter={(event) => {filtered(event.detail.message, event.detail.state)}}/>
        <Button tag="image" label="images" icon="image" on:filter={(event) => {filtered(event.detail.message, event.detail.state)}}/>
        <Button tag="code" label="code" icon="code" on:filter={(event) => {filtered(event.detail.message, event.detail.state)}}/>
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

    input[type="text"] {
        width: 100%;
        max-width: 280px;
    }

    .buttons {
        display: flex;
        position: relative;
        align-items: center;
        padding: 3.4em 0 1em 0;
        border: 2px solid var(--table-header-bg);
        border-radius: 5px;
    }

    .buttons > span {
        position: absolute;
        top: 8px;
        left: 0;
        background: var(--table-header-bg);
        color: var(--table-header-text);
        padding: 2px 20px;
    }
</style>