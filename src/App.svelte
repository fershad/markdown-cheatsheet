<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Table from './components/Table.svelte';
</script>

<Header />
<main class="container">
	<Table />
</main>
<Footer />

<style>
	main.container {
		height: auto;
	}
</style>