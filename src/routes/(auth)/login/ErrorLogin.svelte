<script>
  export let error = null;
</script>

{#if error}
  <section>
    <h3>Gagal login !</h3>
    <small>Periksa kembali username dan password anda !</small>
  </section>
{/if}

<style>
  section {
    background: hsl(0, 100%, 95%);
    padding: 0.5rem 1rem;
    border-radius: 8px;
  }

  h3 {
    color: hsl(0, 100%, 40%);
  }

  small {
    opacity: 0.6;
  }
</style>
