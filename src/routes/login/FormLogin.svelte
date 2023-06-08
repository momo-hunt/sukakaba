<script>
  import Form from "$lib/components/Form.svelte";
</script>

<Form action="?/login" title="Login" on:success on:error>
  <article>
    <input type="text" name="username" placeholder="Username" />
    <input type="password" name="password" placeholder="Password" />
    <button type="submit">Login</button>
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
    outline: 1px solid hsl(205, 10%, 75%);
    border-radius: 4px;
    width: 100%;
    height: 2rem;
    padding: 0 0.5rem;
    font-size: inherit;
  }

  button[type="submit"] {
    font-size: inherit;
    background: hsl(205, 10%, 90%);
    /* color: white; */
    border: none;
    outline: 1px solid hsl(205, 10%, 75%);
    border-radius: 4px;
    width: 100%;
    height: 2rem;
    padding: 0 1rem;
    text-transform: uppercase;
  }
</style>
