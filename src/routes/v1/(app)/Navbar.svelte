<script>
  export let user;
</script>

<header>
  <button class="toggle">=</button>
  <h4>Jeep Kaba</h4>
  <a href="/v1/profil" class="profil">{user?.name}</a>
</header>

<style>
  * {
    /* border: 1px solid red; */
  }

  header {
    height: 3rem;
    background: white;
    display: flex;
    align-items: center;
  }

  .toggle {
    height: 100%;
    aspect-ratio: 1/1;
    margin-right: 0.5rem;
    background: inherit;
  }

  .toggle:hover {
    filter: brightness(0.9);
  }

  .profil {
    margin-left: auto;
    margin-right: 1rem;
    padding: 0 1rem;
    align-self: normal;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
