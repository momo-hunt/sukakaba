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

  <FormLogin />
</main>

<style>
  main {
    position: relative;
    margin: 2rem auto;
    width: min(calc(100% - 2rem), 400px);
    padding: 2rem;
    outline: 1px solid hsl(205, 10%, 85%);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background: white;
  }

  header {
    text-align: center;
  }

  header sub {
    opacity: 0.6;
  }
</style>
