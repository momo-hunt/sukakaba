<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import DialogConfirm from "$lib/components/DialogConfirm.svelte";

  let showConfirmLogout;

  function prosesLogout(e) {
    showConfirmLogout = false;
    if (!e.detail) return;
    const redirectTo = $page.url.pathname + $page.url.search;
    const id = $page.data?.user?.id;
    goto(`/logout?redirectTo=${redirectTo}&id=${id}`);
  }
</script>

<DialogConfirm show={showConfirmLogout} on:result={prosesLogout} />

<button on:click={() => (showConfirmLogout = true)}>Logout</button>

<style>
  button {
    cursor: pointer;
    padding: 0.25rem 1rem;
    background: white;
    border: 1px solid hsl(0, 100%, 50%);
    color: hsl(0, 100%, 50%);
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  button:hover {
    transition: all 0.3s ease;
    background: hsl(0, 100%, 50%);
    color: white;
  }
</style>
