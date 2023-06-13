<script>
  import Form from "./Form.svelte";
  import { toggle } from "$lib/stores";

  export let name;
  export let title;
  export let action;
</script>

{#if !$toggle?.[name]?.value}
  <section>
    <button>
      <span />
    </button>
    <article>
      <Form {action} {title} on:success on:error>
        <h3>{title}</h3>
        <slot />
      </Form>
    </article>
  </section>
{/if}

<style>
  h3 {
    margin-top: 0;
  }

  section {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  button {
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: end;
    padding: 0.25rem 0;
    background: none;
    border: none;
    outline: none;
  }

  button span {
    display: block;
    height: 4px;
    width: 50%;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 8px;
  }

  article {
    overflow-y: auto;
    flex: 1;
    position: relative;
    background: white;
    border-radius: 2rem 2rem 0 0;
    overflow-x: hidden;
    padding: 2rem 1rem;
  }
</style>
