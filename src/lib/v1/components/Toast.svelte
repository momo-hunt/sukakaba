<script>
  import { fade, fly } from "svelte/transition";
  import { toast } from "$lib/v1/stores";

  //   $: console.log($toast);
</script>

{#if $toast.length > 0}
  <section>
    {#each $toast as t}
      {#key t.id}
        <article class={t.type} in:fly={{ y: -100 }} out:fade>
          {t.text}
        </article>
      {/key}
    {/each}
  </section>
{/if}

<style>
  /* * {
    border: 1px solid red;
  } */

  section {
    position: fixed;
    top: 1rem;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
  }

  article {
    margin: auto;
    font-weight: 500;
    border-radius: 0.5rem;
    letter-spacing: 0.5px;
    padding: 0.5rem 1rem;
    background: white;
    width: fit-content;
    margin-bottom: 0.5rem;
    box-shadow: 0 4px 4px hsla(0, 0%, 70%, 0.2);
  }

  article.error {
    color: hsl(0, 100%, 40%);
    background: hsl(0, 100%, 95%);
  }

  article.success {
    color: hsl(125, 100%, 30%);
    background: hsl(125, 100%, 95%);
  }
</style>
