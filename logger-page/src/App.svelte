<script>
  import svelteLogo from './assets/svelte.svg';
  import Command from './components/Command.svelte';
  import Octo from './components/Octo.svelte';
  import viteLogo from '/vite.svg';
</script>

<main class="container">
  <Octo />
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Easy going logger for JS app</h1>

  <div class="card">
    <Command />
  </div>

  <p>
    Check out <a href="https://github.com/xuandai-py/logger-boilerplate" target="_blank" rel="noreferrer">Logger-Boilerplate</a>,
    <a href="https://github.com/expressjs/morgan#readme" target="_blank" rel="noreferrer">Morgan</a>
    or <a href="https://github.com/winstonjs/winston#readme" target="_blank" rel="noreferrer">Winston</a>, for detail documentation!
  </p>


</main>

<style>
  
  .logo {
    height: 3em;
    padding: 0.8em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }

</style>
