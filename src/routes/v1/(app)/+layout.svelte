<script>
  import Navbar from "./Navbar.svelte";

  export let data;
</script>

<Navbar user={data?.user} />

<slot />
