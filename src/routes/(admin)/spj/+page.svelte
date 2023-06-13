<script>
  import { onMount } from "svelte";
  import AddButton from "$lib/components/AddButton.svelte";
  import ListView from "./ListView.svelte";
  import ModalTambah from "./ModalTambah.svelte";
  import { toggle, list } from "$lib/stores";
  import DetailView from "./DetailView.svelte";

  let name = "spj";

  onMount(() => {
    list.get($list, name, { limit: 20 });
  });

  $: console.log($list);
</script>

<h2>SPJ</h2>

<AddButton {name} />

<ListView {name} />
<DetailView {name} />

<ModalTambah />
