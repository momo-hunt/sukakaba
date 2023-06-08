<script>
  export let success = null;
</script>

{#if success}
  <section>
    <article>
      <h2>Selamat !!!</h2>
      <p>Anda berhasil login !</p>
    </article>
  </section>
{/if}

<style>
  section {
    position: fixed;
    z-index: 9;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: hsla(0, 0%, 50%, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  article {
    position: relative;
    margin-top: -8rem;
    background: white;
    text-align: center;
    padding: 2rem;
    border-radius: 8px;
    overflow: hidden;
  }

  article::before,
  article::after {
    content: "";
    position: absolute;
    height: 6px;
    border-radius: 6px;
    width: calc(100% - 4rem);
    bottom: 1rem;
    left: 2rem;
    background: hsla(120, 50%, 80%, 0.5);
  }

  article::after {
    background: hsl(120, 100%, 25%);
    animation: ani-progres 3s linear;
  }

  @keyframes ani-progres {
    to {
      width: 0%;
    }
  }

  article h2 {
    margin-bottom: 1rem;
    color: hsl(120, 100%, 25%);
  }
</style>
