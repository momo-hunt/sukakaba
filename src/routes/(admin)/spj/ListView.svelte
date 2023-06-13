<script>
  import { toggle, list } from "$lib/stores";
  import LoaderBar from "$lib/elements/LoaderBar.svelte";

  export let name;
</script>

{#if $list?.[name]?.loading}
  <LoaderBar>Memuat data</LoaderBar>
{/if}

{#if $list?.[name]?.adding}
  <LoaderBar>Menambah data baru</LoaderBar>
{/if}

{#if !$list?.[name]?.loading && $list?.[name]?.data}
  <ul>
    {#each $list?.[name]?.data as d}
      <li>
        <article>
          <h3>{d?.no_spj}</h3>
          <div>{d?.keperluan} - {d?.tujuan}</div>
          <div class="row">
            <p>22 Jun 2023 <br /> 15:00</p>
            <p>22 Jun 2023 <br /> 15:00</p>
          </div>
          <small>Dibuat : 9 hari lalu</small>
        </article>
      </li>
    {/each}
  </ul>
{/if}

<style>
  h3 {
    margin-top: 0;
  }

  .row {
    display: flex;
  }

  .row > * {
    width: 100%;
    border-left: 2px solid hsl(206, 10%, 85%);
    padding-left: 4px;
  }

  ul {
    margin: 1rem 0;
  }

  ul li {
    position: relative;
    background: white;
    border-bottom: 1px solid hsl(206, 10%, 85%);
  }

  ul li:last-child {
    border: none;
  }

  ul li article {
    padding: 1rem;
  }
</style>
