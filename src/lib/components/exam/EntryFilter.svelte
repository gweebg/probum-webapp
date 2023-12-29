<script>


</script>

<section class="flex flex-col bg-base-200 rounded-lg mb-2 shadow-md mr-4 h-fit">

	<!-- Sort -->
	<div class="p-4">

		<header>
			<h1 class="text-lg font-bold">Sort & Filter</h1>
			<div class="divider mt-0"></div>
		</header>


		<div class="flex flex-col">

			<label class="form-control w-full max-w-xs">
				<div class="label">
					<span class="label-text">Sort by:</span>
				</div>

				<select class="select select-bordered select-sm">
					<option selected>Date</option>
					<option>Course Name</option>
				</select>

				<div class="label">
					<span class="label-text">Sort order:</span>
				</div>

				<select class="select select-bordered select-sm">
					<option selected>Ascending</option>
					<option>Descending</option>
				</select>

				<div class="divider"/>

				<div class="flex flex-col gap-2">

					<p class="label-text"> Filter by: </p>

					<label class="flex flex-row gap-2 items-center cursor-pointer">
						<input type="checkbox" checked="checked" class="checkbox checkbox-sm checkbox-base-200" />
						<span class="label-text"><span class="badge badge-success">Today</span></span>
					</label>

					<label class="flex flex-row gap-2 items-center cursor-pointer">
						<input type="checkbox" checked="checked" class="checkbox checkbox-sm" />
						<span class="label-text"><span class="badge badge-warning">In ? day(s)</span></span>
					</label>

					<label class="flex flex-row gap-2 items-center cursor-pointer">
						<input type="checkbox" checked="checked" class="checkbox checkbox-sm" />
						<span class="label-text"><span class="badge badge-neutral">Today</span></span>
					</label>

				</div>

			</label>


			<div class="mt-6 flex flex-row space-evenly w-full gap-2">

				<button class="btn btn-sm btn-primary w-1/2">Apply</button>
				<button class="btn btn-sm btn-secondary w-1/2">Reset</button>

			</div>

		</div>


	</div>

</section>
