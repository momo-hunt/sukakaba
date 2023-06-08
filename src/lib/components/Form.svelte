<script>
  import { createEventDispatcher } from "svelte";
  import { enhance } from "$app/forms";

  const dispatch = createEventDispatcher();
  export let action;
  export let title;
  export let loading = null;
</script>

<form
  {action}
  {title}
  method="post"
  use:enhance={({ submitter }) => {
    submitter.focus();
    loading = true;
    dispatch("process");

    return async ({ result }) => {
      loading = false;
      console.log("result form->", result);
      if (result.type == "success") return dispatch("success", result.data);
      return dispatch("error", result.data);
    };
  }}
>
  <slot />
</form>
