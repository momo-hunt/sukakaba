<script>
  import { enhance } from "$app/forms";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let title;
  export let action;
</script>

<form
  {title}
  {action}
  method="post"
  use:enhance={({ submitter }) => {
    dispatch("process");
    submitter.focus();

    return async ({ result }) => {
      console.log("result form->", result);
      if (result.type == "success") return dispatch("success", result.data);
      return dispatch("error", result.data);
    };
  }}
>
  <slot />
</form>
