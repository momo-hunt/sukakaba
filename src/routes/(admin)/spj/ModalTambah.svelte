<script>
  import Form from "$lib/components/Form.svelte";
  import Modal from "$lib/components/Modal.svelte";
  import { toggle, list } from "$lib/stores";

  let collection = "spj";
</script>

<Modal name={collection}>
  <Form
    action="/?/add"
    title="Tambah SPJ"
    on:error
    on:success={(e) => {
      list.add(collection, e.detail);
    }}
    on:process={() => {
      list.adding(collection, true);
      toggle.close(collection);
    }}
  >
    <h3>Tambah SPJ</h3>

    <label for="no_spj">No SPJ</label>
    <input type="text" name="no_spj" id="no_spj" required />

    <label for="no_spj">Kepada</label>
    <select name="karyawan_id" id="karyawan_id">
      <option value="">ad</option>
    </select>

    <label for="tujuan">Tujuan</label>
    <input type="text" name="tujuan" id="tujuan" />

    <label for="keperluan">Keperluan</label>
    <input type="text" name="keperluan" id="keperluan" />

    <label for="">Berangkat</label>
    <div class="row">
      <input type="date" name="tanggal_berangkat" id="tanggal_berangkat" />
      <input type="time" name="jam_berangkat" id="jam_berangkat" />
    </div>

    <div class="action">
      <button type="submit" name="submit" value="submit">Tambah</button>
      <button on:click={() => toggle.close()}>Batal</button>
    </div>
  </Form>
</Modal>

<style>
  h3 {
    margin: 0;
  }

  .row,
  .action {
    display: flex;
    gap: 1rem;
  }

  label {
    display: block;
    margin-top: 1rem;
  }

  input,
  select {
    background: white;
    border: none;
    outline: 1px solid hsl(206, 10%, 85%);
    border-radius: 4px;
    width: 100%;
    height: 2rem;
    padding: 0 0.5rem;
    font-size: inherit;
  }

  button {
    margin-top: 1rem;
    cursor: pointer;
    font-size: inherit;
    border: none;
    border-radius: 4px;
    width: 100%;
    height: 2rem;
    padding: 0 1rem;
    text-transform: uppercase;
  }

  button[type="submit"] {
    background: hsl(206, 50%, 85%);
    outline: 1px solid hsl(206, 10%, 85%);
  }

  button[type="submit"]:hover {
    transition: 0.3s ease;
    background: hsl(206, 50%, 75%);
  }

  button[type="submit"]:focus {
    background: hsl(206, 50%, 80%);
    outline: 2px solid hsl(206, 70%, 50%);
  }
</style>
