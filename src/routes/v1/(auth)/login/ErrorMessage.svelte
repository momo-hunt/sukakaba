<script>
  export let error = null;
</script>

{#if error}
  <section>
    <h4>Gagal login !</h4>
    <div>Periksa kembali username dan password anda !</div>
  </section>
{/if}

<style>
  section {
    text-align: left;
    background: hsl(0, 100%, 95%);
    margin: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }

  section h4 {
    color: hsl(0, 100%, 40%);
  }

  section div {
    opacity: 0.8;
  }
</style>
