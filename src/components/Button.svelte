<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let tag;
    export let icon;
    export let label;
    export let active = false;

    function filter(tag) {
        active = !active;
        dispatch('filter', {
                message: tag,
                state: active
            })
    }
</script>

<button data-filter-tag="{tag}" on:click="{() => filter({tag})}" class:active aria-label="Show {label}">
    <i class="gg-{icon}"></i>
</button>

<style lang="scss">
$alt-accent: var(--alternate-accent-color);
button {
    height: 60px;
    width: 60px;
    display: inline-flex;
    background: var(--background-color);
    border: 2px solid var(--text-color);
    margin: 0 20px;
    border-radius: 5px;
    transition: transform 0.3s;
    color: var(--text-color);
}

@media (max-width: 864px) {
    button {
        margin: 10px 20px;
    }
}

button.active {
    transform: rotate(45deg);
    border-color: var(--alternate-accent-color);
    background-color: var(--button-active-color);

    i {
        transform: rotate(-45deg);
    }
}

i {
    transform: rotate(0deg);
    margin: auto;
    transition: transform 0.3s;
}
</style>
