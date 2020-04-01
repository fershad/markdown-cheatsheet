<script>
    import Button from './Button.svelte'
</script>

<div class="filter">
    <input type="text" name="search" id="search">
    <div class="buttons">
        Filter by: 
        <Button tag="H1" />
        <Button tag="LI" />
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
        display: block;
        position: relative;
    }
</style>