import { writable } from "svelte/store";

const toastStore = () => {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,

    success: (text, time) =>
      update((n) => {
        const id = crypto.randomUUID();
        n = [{ id, type: "success", text }, ...n];

        setTimeout(() => {
          set(n.filter((v) => v.id != id));
        }, time || 3000);

        return n;
      }),

    error: (text, time) =>
      update((n) => {
        const id = crypto.randomUUID();
        n = [{ id, type: "error", text }, ...n];

        setTimeout(() => {
          set(n.filter((v) => v.id != id));
        }, time || 3000);

        return n;
      }),
  };
};
export const toast = toastStore();
