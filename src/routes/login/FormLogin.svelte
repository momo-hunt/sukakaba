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
    outline: 1px solid hsl(206, 10%, 85%);
    border-radius: 4px;
    width: 100%;
    height: 2rem;
    padding: 0 0.5rem;
    font-size: inherit;
  }

  input:focus {
    outline: 2px solid hsl(206, 25%, 75%);
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
    background: hsl(206, 25%, 85%);
  }

  button[type="submit"]:focus {
    background: hsl(206, 25%, 85%);
    outline: 2px solid hsl(206, 25%, 75%);
  }

  button[type="submit"]:active,
  button[type="submit"]:disabled {
    opacity: 0.6;
    outline: 2px solid hsl(206, 25%, 75%);
    background: hsl(206, 10%, 95%);
  }
</style>
