<script>
    export let tag;
    export let icon;
</script>

<button data-filter-tag="{tag}"><i class="gg-{icon}"></i></button>

<style>
button {
    height: 40px;
    width: 40px;
    display: inline-block;
    display: inline-flex;
}

i {
    margin: auto;
}
</style>
