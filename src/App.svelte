<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Table from './components/Table.svelte';
</script>

<noscript>
		<div style="height: 100vh; width: 100vw; display: flex;">
		  <p class="h4 loud" style="margin: auto;">
			Javascript is required to use this app. Please enable it and try again.
		  </p>
		</div>
	  </noscript>

<Header />
<main class="container">
	<Table />
</main>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&family=Permanent+Marker&family=Source+Code+Pro&family=Cookie&display=swap"> 
<link rel='stylesheet' href='/typography.css'>
<Footer />


<style>
	main.container {
		height: auto;
	}
</style>