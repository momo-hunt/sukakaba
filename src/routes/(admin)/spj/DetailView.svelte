<script>
  import { toggle, list } from "$lib/stores";
  import Modal from "../../../lib/components/Modal.svelte";

  export let name;
</script>

{#if $toggle?.[`detail-${name}`]?.value}
  <Modal>
    <h3>Detail</h3>
    <p>{$toggle?.[`detail-${name}`]?.data?.no_spj}</p>
  </Modal>
{/if}
