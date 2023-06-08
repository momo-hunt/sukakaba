<script>
  import LogoutComp from "./LogoutComp.svelte";

  export let data;
</script>

<header>
  <small>Hi, <strong>{data?.user?.name}</strong></small>
  <LogoutComp />
</header>

<nav>
  <a href="/">Home</a>
  <a href="/pemakaian">Pemakaian</a>
</nav>

<slot />

<style>
  header {
    display: flex;
    align-items: center;
    background: white;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
  }

  header > *:first-child {
    margin-right: auto;
  }
</style>
