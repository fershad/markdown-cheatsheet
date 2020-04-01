<script>
    import Button from './Button.svelte'
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function filtered(tag, state) {
        dispatch('filtered', {tag, state});
    }
</script>

<div class="filter">
    <!-- <input type="text" name="search" id="search"> -->
    <h2>
        Show only
    </h2>
    <div class="buttons">
        <Button tag="heading" icon="format-heading" on:filter={(event) => {filtered(event.detail.message, event.detail.state)}}/>
        <Button tag="list" icon="layout-list" on:filter={(event) => {filtered(event.detail.message, event.detail.state)}}/>
        <Button tag="text" icon="format-text" on:filter={(event) => {filtered(event.detail.message, event.detail.state)}}/>
        <Button tag="link" icon="link" on:filter={(event) => {filtered(event.detail.message, event.detail.state)}}/>
        <Button tag="table" icon="display-grid" on:filter={(event) => {filtered(event.detail.message, event.detail.state)}}/>
        <Button tag="image" icon="image" on:filter={(event) => {filtered(event.detail.message, event.detail.state)}}/>
        <Button tag="code" icon="code" on:filter={(event) => {filtered(event.detail.message, event.detail.state)}}/>
    </div>
</div>

<style>
    .filter {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    input[type="text"] {
        width: 100%;
        max-width: 280px;
    }

    .buttons {
        display: flex;
        position: relative;
        align-items: center;
    }
</style>