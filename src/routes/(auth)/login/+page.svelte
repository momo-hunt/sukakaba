<script>
  import ErrorLogin from "./ErrorLogin.svelte";
  import FormLogin from "./FormLogin.svelte";

  let error;
</script>

<main>
  <header>
    <h1>Login</h1>
    <sub>Silakan login terlebih dahulu !</sub>
  </header>

  <ErrorLogin {error} />

  <FormLogin bind:errorStatus={error} />
</main>

<style>
  main {
    position: relative;
    margin: 2rem auto;
    width: min(calc(100% - 2rem), 400px);
    padding: 2rem;
    outline: 1px solid hsl(206, 10%, 85%);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background: white;
  }

  header {
    text-align: center;
  }

  header h1 {
    color: hsl(206, 70%, 50%);
    text-decoration: underline;
  }

  header sub {
    opacity: 0.6;
  }
</style>
