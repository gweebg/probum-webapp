<!-- <script>
  export let question;
  let selectedAnswer = null;

  function handleChange(value) {
    selectedAnswer = value;
  }
</script>

<div class="my-4">
  <p class="text-lg font-semibold">{question.description}</p>
  <div class="grid grid-cols-3 mt-2">
    <div class="col-span-1">
      {#each Object.entries(question.answers) as [key, value]}
        <p>{key}</p>
      {/each}
    </div>
    <div class="col-span-1">
      {#each Object.entries(question.answers) as [key, value]}
        <label class="flex items-center">
          <input
            type="radio"
            name={`${question.questionId}_${key}`}
            value="true"
            on:change={() => handleChange(true)}
            class="mr-2"
          />
          <span class="text-sm">True</span>
        </label>
      {/each}
    </div>
    <div class="col-span-1">
      {#each Object.entries(question.answers) as [key, value]}
        <label class="flex items-center">
          <input
            type="radio"
            name={`${question.questionId}_${key}`}
            value="false"
            on:change={() => handleChange(false)}
            class="mr-2"
          />
          <span class="text-sm">False</span>
        </label>
      {/each}
    </div>
  </div>

  <script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    $: dispatch('answer', { questionId: question.questionId, answer: selectedAnswer });
  </script>
</div> -->

<script>
  export let question;

  console.log(question.answers);

  function handleChange(key, value) {
    // You can handle the selected value here
    console.log(`Question ${question.questionId} selected: ${key} - ${value}`);
  }
  console.log(question.answers);

</script>

<div class="my-4">
  <p class="text-lg font-semibold">{question.description}</p>
  <img src={question.imagePath} alt="Question image" class="w-auto h-auto" />
  
  <div class="grid grid-cols-3 mt-2">
    <div class="col-span-1">
      {#each Object.entries(question.answers) as [key, value]}
        <p>{key}</p>
      {/each}
    </div>
    <div class="col-span-1">
      {#each Object.entries(question.answers) as [key, value]}
        <label class="flex items-center">
          <input
            type="checkbox"
            name={`${question.questionId}_${key}`}
            value="true"
            on:change={() => handleChange(key, true)}
            class="mr-2"
          />
          <span class="text-sm">True</span>
        </label>
      {/each}
    </div>
    <div class="col-span-1">
      {#each Object.entries(question.answers) as [key, value]}
        <label class="flex items-center">
          <input
            type="checkbox"
            name={`${question.questionId}_${key}`}
            value="false"
            on:change={() => handleChange(key, false)}
            class="mr-2"
          />
          <span class="text-sm">False</span>
        </label>
      {/each}
    </div>
  </div>
</div>