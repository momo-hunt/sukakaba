<section>
  <div class="loader" />
  <span><slot /></span>
</section>

<style>
  /* * {
    border: 1px solid red;
  } */
  section {
    margin: auto;
  }

  section span {
    color: hsl(206, 50%, 50%);
    /* opacity: 0.8; */
  }

  .loader {
    margin: auto;
    width: 45px;
    /* height: 60px; */
    height: 3rem;
    --c: linear-gradient(#268bd9 0 0);
    background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
    background-size: 9px 50%;
    background-repeat: no-repeat;
    animation: b7 1s infinite linear;
  }
  @keyframes b7 {
    20% {
      background-size: 9px 20%, 9px 50%, 9px 50%;
    }
    40% {
      background-size: 9px 100%, 9px 20%, 9px 50%;
    }
    60% {
      background-size: 9px 50%, 9px 100%, 9px 20%;
    }
    80% {
      background-size: 9px 50%, 9px 50%, 9px 100%;
    }
  }
</style>
