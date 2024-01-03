<script>
    import "../app.css"
	import Navbar from '$lib/components/navbar/Navbar.svelte';
</script>


<div class="flex flex-col h-screen">
	

	<div class="flex w-full flex-1 overflow-y-scroll">
		<slot/>

	</div>
</div>

