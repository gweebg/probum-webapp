<!-- <script>
  export let question;
  let userAnswer = '';

  function handleInput(event) {
    userAnswer = event.target.value;
  }
</script>

<div class="my-4">
  <p class="text-lg font-semibold">{question.description}</p>
  <textarea
    bind:value={userAnswer}
    on:input={handleInput}
    class="border rounded p-2 w-full"
    rows="4"
    placeholder="Type your answer here..."
  ></textarea>

  
  <script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    $: dispatch('answer', { questionId: question.questionId, answer: userAnswer });
  </script>
</div> -->

<script>
  export let question;
  let userAnswer = '';
</script>

<div class="my-4">
  <p class="text-lg font-semibold">{question.description}</p>
  <img src={question.imagePath} alt="Question image" class="w-auto h-auto" />
  <textarea
    bind:value={userAnswer}
    class="border rounded p-2 w-full"
    rows="4"
    placeholder="Type your answer here..."
  ></textarea>
</div>