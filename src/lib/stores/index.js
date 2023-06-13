import { writable } from "svelte/store";

// TOGGLE
const toggleStores = () => {
  const { subscribe, set, update } = writable({});
  return {
    subscribe,
    open: (name, data) =>
      update((n) => ({ ...n, [name]: { value: true, data } })),
    close: (name, data) =>
      update((n) => ({ ...n, [name]: { value: false, data } })),
  };
};
export const toggle = toggleStores();

// LIST
const listStores = () => {
  const { subscribe, set, update } = writable({});
  return {
    subscribe,
    adding: (collection, adding) =>
      update((n) => {
        n[collection] = { adding, ...n[collection] };
        return n;
      }),

    add: (collection, data) =>
      update((n) => {
        n[collection] = {
          ...n[collection],
          adding: false,
          data: [data, ...n[collection].data],
        };
        // n[collection].data = [data, ...n[collection].data];
        return n;
      }),

    update: (collection, id, data) =>
      update((n) => {
        n[collection].data = n[collection].data.map((d) => {
          if (d.id == id) {
            d = data;
          }
          return d;
        });

        console.log(n[collection].data);
        return n;
      }),

    delete: (collection, id) =>
      update((n) => {
        n[collection].data = n[collection].data.filter((d) => d.id != id);
        return n;
      }),

    get: async (old, collection, option, callback) => {
      set({ ...old, [collection]: { loading: true } });

      const params = new URLSearchParams(option);
      const url = `../api/${collection}?${params}`;

      const res = await fetch(url);
      const respon = await res.json();
      //   console.log(respon);

      set({ ...old, [collection]: { loading: false, ...respon } });
    },
  };
};
export const list = listStores();
