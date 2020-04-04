<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Table from './components/Table.svelte';
	if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js');
    }
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