<!-- <script>
    export let question;
    let selectedOptions = [];
  
    function handleChange(event) {
      const option = event.target.value;
      if (event.target.checked) {
        selectedOptions = [...selectedOptions, option];
      } else {
        selectedOptions = selectedOptions.filter((selected) => selected !== option);
      }
    }
  </script>
  
  <div class="my-4">
    <p class="text-lg font-semibold">{question.description}</p>
    <div class="mt-2">
      {#each Object.entries(question.answers) as [key, answer]}
        <div class="flex items-center space-x-4">
          <label class="flex items-center">
            <input
              type="checkbox"
              name={question.questionId}
              value={key}
              on:change={handleChange}
              class="mr-2"
            />
            <span class="mr-2">{key}</span>
          </label>
        </div>
      {/each}
    </div>
  
    
    <script>
      import { createEventDispatcher } from 'svelte';
      const dispatch = createEventDispatcher();
  
      $: dispatch('answer', { questionId: question.questionId, answer: selectedOptions });
    </script>
  </div>
 -->

 <script>
    export let question;
  
    let selectedOptions = [];
  
    function handleChange(event) {
      // Update the selected options array based on user input
      const option = event.target.value;
      if (event.target.checked) {
        selectedOptions = [...selectedOptions, option];
      } else {
        selectedOptions = selectedOptions.filter((selected) => selected !== option);
      }
  
      // You can log or use the selectedOptions array as needed
      console.log(`Question ${question.questionId} selected options:`, selectedOptions);
    }
  </script>
  
  <div class="my-4">
    <p class="text-lg font-semibold">{question.description}</p>
    <img src={question.imagePath} alt="Question image" class="w-auto h-auto" />
    <div class="mt-2">
      {#each Object.entries(question.answers) as [key, answer]}
        <div class="flex items-center space-x-4">
          <label class="flex items-center">
            <input type="checkbox" name={question.questionId} value={key} on:change={handleChange} class="mr-2" />
            <span class="mr-2">{key}</span>
    
          </label>
        </div>
      {/each}
    </div>
  </div>