<script>
  import LoginSvg from "$lib/v1/assets/svg/undraw_login.svg";
  import ErrorMessage from "./ErrorMessage.svelte";
  import LoginForm from "./LoginForm.svelte";

  let error = false;
</script>

<main>
  <img src={LoginSvg} alt="Login" />

  <header>
    <h1>Login</h1>
    <p>Silakan login terlebih dahulu.</p>
  </header>

  <ErrorMessage {error} />

  <LoginForm bind:error />

  <footer>
    <a href="/v1/lupa-password">Lupa password ? Klik disini.</a>
  </footer>
</main>

<style>
  /* * {
    border: 1px solid red;
  } */

  main {
    text-align: center;
  }

  img {
    width: min(80%, 400px);
    margin-top: 2rem;
  }

  header {
    margin-bottom: 2rem;
  }

  header h1 {
    margin-bottom: 0.5rem;
    color: var(--blue);
  }

  header p {
    opacity: 0.6;
  }

  footer a {
    text-decoration: none;
    opacity: 0.6;
    color: var(--blue);
  }

  footer a:hover {
    opacity: 1;
    text-decoration: underline;
  }
</style>
