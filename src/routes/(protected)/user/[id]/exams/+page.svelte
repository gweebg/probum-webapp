<script>

	import EntryItem from '$lib/components/exam/EntryItem.svelte';

	export let data;

	const { user, exams } = data;

</script>

<svelte:head>
	<title>
		Exam Listing
	</title>
</svelte:head>

<main>
	<div class="flex flex-col items-center justify-center">

		<header class="w-1/2">
			<div class="flex items-center">
				<h1 class="text-2xl"><span class="font-bold">{user.name}</span>'s Available Exams</h1>
				<div class="badge badge-outline ml-auto mt-2">{exams.length} Entries</div>
			</div>
			<div class="divider mt-1"></div>
		</header>

		{#if exams.length > 0}

			{#each exams as exam}
				<EntryItem exam={exam}/>
			{/each}

		{:else}

			<h1 class="text-xl text-neutral opacity-80">
				Oops! You don't have exams assigned to your number!
			</h1>

		{/if}

	</div>

</main>