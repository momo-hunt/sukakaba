<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let show;
</script>

{#if show}
  <section>
    <article>
      <h2>Apakah anda yakin ?</h2>
      <div class="action">
        <button class="yes" on:click={() => dispatch("result", true)}>Ya</button
        >
        <button class="no" on:click={() => dispatch("result", false)}
          >Tidak</button
        >
      </div>
    </article>
  </section>
{/if}

<style>
  section {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }

  article {
    width: min(calc(100% - 4rem), 400px);
    margin: 2rem;
    padding: 1rem;
    background: white;
    border-radius: 0.5rem;
    text-align: center;
  }

  article .action {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  article .action button {
    width: 30%;
    font-size: inherit;
    cursor: pointer;
    padding: 0.5rem 1rem;
    background: none;
    border: none;
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  article .action button.yes {
    background: hsl(120, 100%, 35%);
    color: white;
  }

  article .action button.no {
    color: red;
    background: hsl(0, 100%, 98%);
  }

  article .action button.yes:hover {
    filter: brightness(1.2);
    transition: all 0.3s ease;
  }

  article .action button.no:hover {
    outline: 1px solid red;
    outline-offset: -1px;
    transition: all 0.3s ease;
  }

  article .action button.yes:active,
  article .action button.no:active {
    filter: brightness(0.8);
  }
</style>
