<script>
  import { toggle } from "$lib/stores";

  export let name;
</script>

<section>
  <button on:click={() => toggle.open(name)}>&plus;</button>
</section>

<style>
  section {
    position: fixed;
    z-index: 1;
    bottom: 1rem;
    right: 1rem;
  }

  section button {
    border: none;
    outline: none;
    background: hsl(206, 70%, 50%);
    color: white;
    padding: 1rem;
    aspect-ratio: 1/1;
    border-radius: 50%;

    font-size: 2.5rem;
    line-height: 0;
  }
</style>
