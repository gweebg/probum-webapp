<script>

	import { calculateTimeUntilDate, formatDate } from '$lib/helpers/dates.js';

	import Icon from '@iconify/svelte';

	export let exam;

	const untilDate = calculateTimeUntilDate(exam.start_at)

</script>


<div class="flex w-full py-2 px-4">

		<div class="collapse collapse-arrow bg-base-200">

			<input type="checkbox" />

			<div class="collapse-title text-xl font-medium relative z-10 pointer-events-none">
				<div class="flex flex-row mr-auto justify-between items-center">

					<!-- Header -->
					<div class="flex flex-row items-center gap-2">
						<div class="tooltip tooltip-right" data-tip="Open">
							<a href="/" class="pointer-events-auto">
								<Icon icon="ion:open-outline"></Icon>
							</a>
						</div>
						<h1 class="text-xl font-bold">{exam.uc} </h1>

						<div class="badge badge-outline">Exam</div>
					</div>

					<!-- Starts At -->
					<div class="flex flex-row gap-2">
						{#if untilDate === "today"}
							<div class="badge badge-success">
								<p>Today</p>
							</div>
						{:else if untilDate === "expired" }
							<div class="badge badge-neutral">
								<p>Expired</p>
							</div>
						{:else}
							<div class="badge badge-warning">
								<p>In {calculateTimeUntilDate(exam.start_at)}</p>
							</div>
						{/if}
					</div>

				</div>
			</div>

			<!-- Collapse Body -->
			<div class="collapse-content">

				<!-- Description -->
				<p class="text-wrap">{exam.description}</p>

				<!-- Details -->
				<div class="mt-2">
					<div class="divider mt-0"></div>
					<div class="grid grid-cols-3">
						<p><span class="font-semibold">Building:</span> <span class="badge">{exam.location.building}</span></p>
						<p><span class="font-semibold">Nº. Questions:</span> <span class="badge">{exam.question_amount}</span></p>
						<p><span class="font-semibold">Duration:</span> <span class="badge">{exam.duration} hour(s)</span></p>
						<p><span class="font-semibold">Room:</span> <span class="badge">{exam.location.room}</span></p>
						<p><span class="font-semibold">Max. Score:</span> <span class="badge">{exam.scored_to}</span></p>
						<p><span class="font-semibold">Date:</span> <span class="badge">{formatDate(exam.start_at)}</span></p>
					</div>
				</div>

				<!-- Controls -->
				<div class="flex flex-row mt-4">
					<div class="tooltip tooltip-left ml-auto" data-tip="Start Exam">
						{#if untilDate === "today"}
							<button class="btn btn-success btn-xs sm:btn-xs md:btn-sm lg:btn-sm">Enroll</button>
						{:else}
							<button disabled class="btn btn-disabled ml-auto btn-xs sm:btn-xs md:btn-sm lg:btn-sm">Enroll</button>
						{/if}
					</div>
				</div>

			</div>
		</div>
</div>
