<ul>
  {#each [1, 2, 3] as d}
    <li>
      <article>
        <h3>{d}/X/2023</h3>
        <div>Antar BRI - Dampit</div>
        <div class="row">
          <p>22 Jun 2023 <br /> 15:00</p>
          <p>22 Jun 2023 <br /> 15:00</p>
        </div>
        <small>Dibuat : 9 hari lalu</small>
      </article>
    </li>
  {/each}
</ul>

<style>
  .row {
    display: flex;
  }

  .row > * {
    width: 100%;
    border-left: 2px solid hsl(206, 10%, 85%);
    padding-left: 4px;
  }

  ul {
    margin: 1rem 0;
  }

  ul li {
    background: white;
    border-bottom: 1px solid hsl(206, 10%, 85%);
  }

  ul li:last-child {
    border: none;
  }

  ul li article {
    padding: 1rem;
  }
</style>
