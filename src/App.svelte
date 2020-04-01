<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Filter from './components/Filter.svelte';
	import Table from './components/Table.svelte';
</script>

<Header />
<main class="container">
	<Filter />
	<Table />
</main>
<Footer />

<style>
	main.container {
		height: auto;
	}
</style>