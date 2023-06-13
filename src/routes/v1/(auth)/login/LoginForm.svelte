<script>
  import Form from "$lib/v1/components/Form.svelte";
  import LoaderBar from "$lib/v1/components/LoaderBar.svelte";
  import { toast } from "$lib/v1/stores";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  let loading;
  export let error = null;

  function onProcess() {
    loading = true;
    error = false;
  }

  function onSuccess(e) {
    loading = false;
    toast.success(`Selamat datang ${e.detail?.name} !`);
    goto($page.data?.redirectTo);
  }

  function onError() {
    loading = false;
    error = true;
    toast.error("Gagal login !");
  }
</script>

<Form
  action="?/login"
  title="Login"
  on:process={onProcess}
  on:success={onSuccess}
  on:error={onError}
>
  <div class="form">
    <input type="text" name="username" placeholder="Username" required />
    <input type="password" name="password" placeholder="Password" required />

    {#if loading}
      <LoaderBar />
    {:else}
      <button type="submit">Login</button>
    {/if}
  </div>
</Form>

<style>
  .form {
    padding: 0 1rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    display: block;
    height: 3rem;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    background: white;
    padding: 0 1rem;
    border-radius: 0.5rem;
  }

  input:focus,
  button:focus,
  button:active {
    outline: 2px solid var(--blue);
  }

  button {
    background: white;
    height: 3rem;
    width: 50%;
    font-size: 1.5rem;
    border-radius: 0.5rem;
  }

  button[type="submit"] {
    background: var(--blue);
    color: white;
    font-weight: 500;
    letter-spacing: 1px;
  }

  button[type="submit"]:hover {
    filter: brightness(1.2);
  }
</style>
