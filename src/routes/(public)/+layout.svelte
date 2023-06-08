<script>
  export let data;
</script>

<header>
  <div>{data?.user?.name}</div>
  <button class="logout">Logout</button>
</header>

<slot />

<style>
  header {
    display: flex;
    align-items: center;
  }

  header > *:first-child {
    margin-right: auto;
  }

  header button.logout {
    padding: 0.25rem 1rem;
    background: white;
    border: 1px solid red;
    color: red;
  }
</style>
