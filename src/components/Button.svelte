<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let tag;
    export let icon;
    let active = false;

    function filter(tag) {
        console.log(tag);
        active = !active;
    }
</script>

<button data-filter-tag="{tag}" on:click="{() => filter({tag})}" class:active><i class="gg-{icon}"></i></button>

<style lang="scss">
button {
    height: 40px;
    width: 40px;
    display: inline-flex;
    text-decoration-color: #a2dffb;
    text-decoration: underline;
}

i {
    margin: auto;
}
</style>
