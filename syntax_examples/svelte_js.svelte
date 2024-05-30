<script>
  import { onMount } from 'svelte';

  const title = 'Svelte Example';
  const countStart = 0;
  const complexData = { key1: 'value1', key2: 42 };
  const customType = 'option1';

  let count = countStart;
  let message = 'Click the button to start counting.';

  function handleClick() {
    count += 1;
    message = `You clicked the button ${count} times.`;
  }

  onMount(() => {
    console.log('Component mounted');
  });
</script>

<style>
  h1 {
    color: #4a4a4a;
    font-size: 24px;
  }

  p {
    color: #6b6b6b;
    font-size: 16px;
  }

  button {
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 14px;
    cursor: pointer;
  }

  button:hover {
    background-color: #2980b9;
  }
</style>

<h1>{title}</h1>
<p>Complex data: {complexData.key1}, {complexData.key2}</p>
<p>Custom type: {customType}</p>
<p>{message}</p>
<button on:click={handleClick}>Click me</button>
