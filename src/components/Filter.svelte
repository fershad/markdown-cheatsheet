<script>
    import Button from './Button.svelte'
</script>

<div class="filter">
    <!-- <input type="text" name="search" id="search"> -->
    <h2>
        Filter
    </h2>
    <div class="buttons">
        <Button tag="heading" icon="format-heading" />
        <Button tag="list" icon="layout-list" />
        <Button tag="text" icon="format-text" />
        <Button tag="link" icon="link" />
        <Button tag="table" icon="display-grid" />
        <Button tag="image" icon="image" />
        <Button tag="code" icon="code" />
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