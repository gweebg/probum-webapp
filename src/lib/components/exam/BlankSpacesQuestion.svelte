<script>

  export let question;
  console.log("teste" + question);
  export let userAnswers = Array.from({ length: Object.keys(question.answers).length }, () => []);
  let splitAnswers = question.description.split(/{-\d-}/);
  let i = -1;
  console.log(splitAnswers);
  console.log(userAnswers);


</script>

<img src={question.imagePath} alt="Question image" class="w-auto h-auto" />
<div class="my-4">
  <div class="flex space-x-2">
    {#each splitAnswers as sa}
      {#if sa !== ""}
        <span>{sa}</span>
        <input type="text" bind:value={userAnswers[++i]} class="border rounded p-1 w-16" />
        
      {/if}
    {/each}
  </div>
</div>
