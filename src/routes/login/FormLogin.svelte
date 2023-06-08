<script>
  import Form from "$lib/components/Form.svelte";
  import LoaderBar from "$lib/elements/LoaderBar.svelte";

  let loading;
</script>

<Form action="?/login" title="Login" bind:loading on:success on:error>
  <article>
    <input type="text" name="username" placeholder="Username" />
    <input type="password" name="password" placeholder="Password" />
    {#if loading}
      <LoaderBar />
    {:else}
      <button type="submit">Login</button>
    {/if}
  </article>
</Form>

<style>
  article {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  input {
    background: white;
    border: none;
    outline: 1px solid hsl(206, 10%, 85%);
    border-radius: 4px;
    width: 100%;
    height: 2rem;
    padding: 0 0.5rem;
    font-size: inherit;
  }

  input:focus {
    outline: 2px solid hsl(206, 70%, 50%);
  }

  button[type="submit"] {
    cursor: pointer;
    font-size: inherit;
    background: hsl(206, 50%, 85%);
    border: none;
    outline: 1px solid hsl(206, 10%, 85%);
    border-radius: 4px;
    width: 100%;
    height: 2rem;
    padding: 0 1rem;
    text-transform: uppercase;
  }

  button[type="submit"]:hover {
    transition: 0.3s ease;
    background: hsl(206, 50%, 75%);
  }

  button[type="submit"]:focus {
    background: hsl(206, 50%, 80%);
    outline: 2px solid hsl(206, 70%, 50%);
  }
</style>
