<script>
  import { enhance } from "$app/forms";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let title;
  export let action;
  let internalError = null;
  $: console.log(internalError);
</script>

{#if internalError}
  <h2 style="color: red;">{internalError}</h2>
  <p>Periksa koneksi internet anda.</p>
{/if}

{#if !internalError}
  <form
    {title}
    {action}
    method="post"
    use:enhance={({ submitter }) => {
      dispatch("process");
      submitter.focus();

      return async ({ result }) => {
        console.log("result form->", result);
        if (result?.type == "success") return dispatch("success", result?.data);
        if (result?.status == 500) internalError = result?.error?.message;
        return dispatch("error", result?.data);
      };
    }}
  >
    <slot />
  </form>
{/if}
